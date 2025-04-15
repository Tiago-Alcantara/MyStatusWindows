import { getDados } from "./status";

export default function handler(req, res) {
  if (req.method === "POST") {
    const dados = getDados();
    const body = req.body;

    dados.temperatura = body.temperatura;
    dados.chovendo = body.chovendo;
    dados.janela = body.janela;
    dados.ultima_fechada = body.ultima_fechada;

    res.status(200).json({ ok: true });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
