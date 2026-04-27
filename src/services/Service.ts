import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacia-nest.onrender.com/"
})

// consultar
export const buscar = async(url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data)
}

// cadastrar
export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data)
}

// atualizar
export const atualizar = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data)
}

// deletar
export const deletar = async(url: string) => {
  await api.delete(url);
}