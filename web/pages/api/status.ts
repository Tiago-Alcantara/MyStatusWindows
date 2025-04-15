let dados: any = {
  temperatura: null,
  chovendo: false,
  janela: "desconhecido",
  ultima_fechada: null,
};

export function getDados() {
  return dados;
}

export default function handler(req, res) {
  res.status(200).json(getDados());
}
