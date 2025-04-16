#include <WiFiS3.h>
#include <ArduinoHttpClient.h>
#include <dht11.h>
#include <NTPClient.h>
#include <TimeLib.h>
#include <WiFiUdp.h>

// ====== CONFIGURAÇÕES DO WIFI ======
const char* ssid = "iPhone";
const char* password = "tiago123456";

// ====== SENSOR DE TEMPERATURA ======
#define DHTPIN 2       // Pino onde o sensor DHT está conectado
dht11 dhtSensor;  // Ou DHT11, conforme seu sensor

// ====== SERVIDOR PARA ENVIAR ======
char server[] = "my-status-windows-rnrw.vercel.app"; // Substitua com o seu domínio da Vercel
int port = 443;
WiFiSSLClient  wifi;
HttpClient client(wifi, server, port);

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", -10800, 60000); // -10800 = GMT-3 (Brasil)

// ====== OUTROS ======
bool estaChovendo = false;
bool janelaFechada = false;
String ultimaFechada = "2025-04-15 16:40";

void setup() {
  Serial.begin(115200);

  while (WiFi.begin(ssid, password) != WL_CONNECTED) {
    Serial.println("Conectando ao WiFi...");
    delay(1000);
  }

  Serial.println("WiFi conectado!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
  timeClient.begin();

}

void loop() {
  // Ler temperatura
  dhtSensor.read(DHTPIN);

  // Simulação: alterna o estado de chuva e janela
  estaChovendo = random(0, 2);
  janelaFechada = estaChovendo;
  if (janelaFechada) {
    timeClient.update(); // garante que a hora está atualizada
    unsigned long epochTime = timeClient.getEpochTime();

    setTime(epochTime); // configura hora global da TimeLib
    char buffer[25];
    sprintf(buffer, "%04d-%02d-%02d %02d:%02d:%02d", year(), month(), day(), hour(), minute(), second());
    ultimaFechada = String(buffer);
  } 

  // Criar JSON
  String json = "{";
  json += "\"temperatura\":" + String((float)dhtSensor.temperature - 2, 2) + ",";
  json += "\"chovendo\":" + String(estaChovendo ? "true" : "false") + ",";
  json += "\"janela\":\"" + String(janelaFechada ? "fechada" : "aberta") + "\",";
  json += "\"ultima_fechada\":\"" + ultimaFechada + "\"";
  json += "}";

  Serial.println("Enviando dados:");
  Serial.println(json);

  // Fazer POST
  client.beginRequest();
  client.post("/api/atualizar");
  client.sendHeader("Content-Type", "application/json");
  client.sendHeader("Content-Length", json.length());
  client.beginBody();
  client.print(json);
  client.endRequest();

  // Ler resposta
  int statusCode = client.responseStatusCode();
  String response = client.responseBody();
  Serial.print("Status Code: ");
  Serial.println(statusCode);
  Serial.print("Resposta: ");
  Serial.println(response);

  // Espera 1 minuto antes de enviar de novo
  delay(10000);

}