import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

function DeletarCategoria() {

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
        ToastAlerta('Erro ao buscar categorias', 'erro')
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

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria(){

    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      ToastAlerta('Categoria deletado com sucesso!', 'sucesso')
    }catch(error: any){
      ToastAlerta('Categoria não encontrada', 'erro')
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar a categoria a seguir?</p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">Categoria</header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
        <div className="flex">
          <button className="flex items-center justify-center text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}><XIcon size={32} /></button>
          <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center" onClick={deletarCategoria}>
            {
              isLoading ?
                  <ClipLoader 
                      color="#ffffff"
                      size={24}
                  />
              :
              <span><CheckIcon size={32} /></span>                      
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria