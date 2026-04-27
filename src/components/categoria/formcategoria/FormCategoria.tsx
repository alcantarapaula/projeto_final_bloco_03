import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, cadastrar, atualizar} from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {

    // Objeto responsável por redirecionar o usuário pora uma outra rota, sair de um compotente pra outro
  const navigate = useNavigate();

  //Estado para configurar o loader (animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado para receber os dados do categoria que está presente no backend
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  // Acessar o parâmetro id da rota de edção do categoria
  const {id} = useParams<{id: string}>()

  // Função para buscar categoria por id no backend que será atualizada
    async function buscarCategoriaPorId(){
      try{
        setIsLoading(true)
  
        await buscar(`/categorias/${id}`, setCategoria)
      }catch(error: any){
        ToastAlerta('Categoria não encontrada', 'erro')
      } finally {
        setIsLoading(false);
      }
    }


  // Cria um useEffect para monitorar o id da rota do componente
  useEffect( () => {
    if(id !== undefined) {
      buscarCategoriaPorId()
    }
  }, [id])

  // Função de atualização do estado categoria
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>){
    e.preventDefault();
    setIsLoading(true);
    
    if(categoria.id !== undefined) {
      try{
        await atualizar('/categorias', categoria, setCategoria);
        ToastAlerta('Categoria atualizada com sucesso!', 'sucesso')
      }catch(error: any){
          ToastAlerta('Erro ao atualizar o Categoria', 'erro')
    }

    } else {
      try{
        await cadastrar('/categorias', categoria, setCategoria);
        ToastAlerta('Categoria cadastrada com sucesso!', 'sucesso')
      }catch(error: any){
          ToastAlerta('Erro ao Cadastrar o Categoria', 'erro')
    } }

    setIsLoading(false);
    retornar() 
  }

  function retornar() {
    navigate('/categorias')
  }


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">{id === undefined ? "Cadastrar" : "Editar"} Categoria</h1>
      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input type="text" 
            placeholder="Nome..."
            name="nome"
            className="border-2 border-slate-700 rounded p-2 bg-white"
            value={categoria.nome}
            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-800 hover:bg-indigo-900 w-1/2 py-2 mx-auto flex justify-center cursor-pointer"
          type="submit"
        >
          {
            isLoading ?

              <ClipLoader
                color="#ffffff"
                size={24}
              />

            :

              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>

          }
        </button>
      </form>
    </div>
  )
}

export default FormCategoria