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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">🌿 Status do Ambiente</h1>

        {/* Card circular estilizado */}
        <div className="relative w-72 h-72 rounded-full mx-auto bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center shadow-lg">
          <div className="absolute w-60 h-60 bg-gray-900 rounded-full flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">{status.temperatura}°C</p>
            <span className="text-green-400 text-xl mt-2">🌱</span>
          </div>
        </div>

        {/* Informações abaixo do círculo */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
            <span className="text-lg">🌧️ Está chovendo?</span>
            <span className={`font-bold ${status.chovendo ? 'text-red-400' : 'text-green-400'}`}>
              {status.chovendo ? "Sim" : "Não"}
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
            <span className="text-lg">🚪 Janela</span>
            <span className={`font-bold ${status.janela === 'fechada' ? 'text-red-400' : 'text-green-400'}`}>
              {status.janela.charAt(0).toUpperCase() + status.janela.slice(1)}
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
            <span className="text-lg">🕓 Última fechada</span>
            <span className="text-gray-300 text-sm">{status.ultima_fechada}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
