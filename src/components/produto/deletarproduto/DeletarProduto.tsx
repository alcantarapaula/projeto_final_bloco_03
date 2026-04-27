import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Produto from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { CheckIcon, XIcon } from "@phosphor-icons/react"


function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()


    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            ToastAlerta('Erro ao buscar produto', 'erro')
        }
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)

            ToastAlerta('Produto apagado com sucesso', 'sucesso')

        } catch (error: any) {
                ToastAlerta('Erro ao apagar produto', 'erro')
            }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

  return (
    <div className="container w-2/3 xl:w-1/3 mx-auto">
      <h1 className="text-2xl md:text-4xl text-center my-4">Deletar Produto</h1>
      <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar o seguinte produto?</p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">Produto</header>
        <div className="bg-white p-8 flex flex-col gap-2">
          <p className="text-3xl h-full">{produto.nome}</p>
          <p className="text-xl">Categoria: {produto.categoria?.nome}</p>
        </div>
        <div className="flex">
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 flex justify-center" onClick={retornar}><XIcon size={32} /></button>
          <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center" onClick={deletarProduto}>
            { isLoading ? 
              <ClipLoader 
                  color="#ffffff" 
                  size={24}
              /> : 
              <span><CheckIcon size={32} /></span>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto