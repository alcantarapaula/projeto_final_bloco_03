import CardProduto from "../cardproduto/CardProduto";
import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaProdutos() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [produtos, setPostagens] = useState<Produto[]>([]);


  useEffect(() => {
    buscarPostagens()
  }, [produtos.length])

  async function buscarPostagens() {
    try{
      setIsLoading(true)

      await buscar('/produtos', setPostagens)
    }catch(error: any){
      ToastAlerta('Erro ao buscar produtos', 'erro')
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader
            color='#312e81'
            size={32}
          />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          {(!isLoading && produtos.length === 0) && (
            <span className="text-3xl text-center my-8">
              Nenhum produto foi encontrado
            </span>
          )}
          <div className="container mx-auto my-4 gap-8 grid grid-cols-1 md:grid-cols-2">
            {
              produtos.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaProdutos