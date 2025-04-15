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
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Status da Casa</h1>
      <p>🌡️ Temperatura: {status.temperatura} °C</p>
      <p>🌧️ Está chovendo? {status.chovendo ? "Sim" : "Não"}</p>
      <p>🚪 Janela: {status.janela}</p>
      <p>🕓 Última vez que fechou: {status.ultima_fechada}</p>
    </div>
  );
}
