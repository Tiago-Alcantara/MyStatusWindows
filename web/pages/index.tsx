import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    fetch("/api/status")
      .then((res) => res.json())
      .then(setStatus);
  }, []);

  if (!status) return <p>Carregando...</p>;

  return (
     <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🌐 Monitoramento Residencial
        </h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">🌡️ Temperatura Atual</h2>
            <p className="text-3xl text-gray-800">{status.temperatura} °C</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-indigo-400">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🌧️ Está Chovendo?</h2>
            <p className={`text-2xl ${status.chovendo ? 'text-red-600' : 'text-green-600'}`}> 
              {status.chovendo ? "Sim ☔" : "Não ☀️"}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">🚪 Status da Janela</h2>
            <p className={`text-2xl ${status.janela === 'fechada' ? 'text-red-500' : 'text-green-500'}`}>
              {status.janela.charAt(0).toUpperCase() + status.janela.slice(1)}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-gray-400">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">🕓 Última Fechada</h2>
            <p className="text-md text-gray-600">{status.ultima_fechada}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
