import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [categorias, setCategorias] = useState<Categoria[]>([])

  const [categoria, setCategoria] = useState<Categoria>({id: 0, nome: '', })

  const [produto, setProduto] = useState<Produto>({} as Produto)

  const {id} = useParams<{id: string}>()

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto)
    } catch (error: any) {
        ToastAlerta('Erro ao buscar produto', 'erro')
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
        ToastAlerta('Erro ao buscar categoria', 'erro')
    }
  }

  async function buscarCategorias(){
  try{
    await buscar('/categorias', setCategorias)
  }catch(error: any){
      ToastAlerta('Erro ao buscar categorias', 'erro')
    }
  }

  useEffect(() => {
    buscarCategorias()

    if(id !== undefined) {
      buscarProdutoPorId(id)
    }
  }, [id])

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    })
  }, [categoria])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    })
  }

  function retornar() {
    navigate('/produtos')
  }

  async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>){
    e.preventDefault()
    setIsLoading(true)

    if(id !== undefined) {
      try {
        await atualizar('/produtos', produto, setProduto);

        ToastAlerta('Produto atualizado com sucesso!', 'sucesso')
      } catch (error: any) {
          ToastAlerta('Erro ao atualizar a produto', 'erro')
        }
    } else {
        try {
        await cadastrar('/produtos', produto, setProduto)

        ToastAlerta('Produto cadastrado com sucesso!', 'sucesso')
      } catch (error: any) {
          ToastAlerta('Erro ao cadastrar a produto', 'erro')
        }
      }

    setIsLoading(false)
    retornar()
  }

  const carregandoCategoria = categoria.nome === ''


  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-2xl md:text-4xl text-center my-8">
        {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
      </h1>
      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2 bg-white"
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço do produto</label>
          <input 
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2 bg-white"
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto do produto</label>
          <input 
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2 bg-white"
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do Produto</p>
          <select name="categoria" id="categoria" className="border p-2 border-slate-800 rounded bg-white"
          onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <>
              <option value={categoria.id}>{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button type="submit" className="rounded disabled:bg-slate-200 bg-indigo-800 hover:bg-indigo-900 text-white font-bold w-1/2 mx-auto py-2 flex justify-center cursor-pointer"
        disabled={carregandoCategoria}>
          { isLoading ?
            <ClipLoader
            color='#fff'
            size={24}
            /> : <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  )
}

export default FormProduto