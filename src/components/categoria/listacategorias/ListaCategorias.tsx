import CardCategoria from "../cardcategoria/CardCategoria";
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaCategorias() {


  //Estado para configurar o loader (animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado para receber todos os categorias presentes no backend
  const [categorias, setCategorias] = useState<Categoria[]>([]);


  // Cria um useEffect para inicializar a função buscarCategorias
  useEffect( () => {
    buscarCategorias()
  }, [categorias.length]);

  // Função para buscar todos os categorias no backend
  async function buscarCategorias(){
    try{
      setIsLoading(true)

      await buscar('/categorias', setCategorias)
    }catch(error: any){
      ToastAlerta('Erro ao buscar categorias', 'erro')
    } finally {
      setIsLoading(false);
    }
  }

  return  (
    <>
    <div className="h-full w-full">

      {
       isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader
            color="#312e81"
            size={32}
          />  
        </div>
       )
      }
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">

          {
            (!isLoading && categorias.length === 0) && (
              <span className="text-3xl text-center my-8">
                Nenhum Categoria foi encontrado!
              </span>
            )
          }
          {
            (!isLoading) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria}/>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default ListaCategorias;