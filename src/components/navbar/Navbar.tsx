import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white"
      >
        <div className="container flex justify-between items-center text-sm sm:text-base md:text-lg mx-8 gap-2"
        >
          <Link to="/home">
          <img src="https://ik.imagekit.io/paula/logofarmacia.png" alt="Logo Farmácia" className="max-h-12" />
          </Link>
            <div className="flex items-center gap-0.5 md:gap-2 p-0 w-1/4 md:w-1/3">
            <input
              type="text"
              placeholder="Procurar..."
              className="bg-white border border-gray-300 rounded px-3 py-0.5 sm:py-1 text-black outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-3 sm:py-2 rounded">
              <MagnifyingGlassIcon size={20} className="hidden sm:block" />
              <MagnifyingGlassIcon size={14} className="sm:hidden"/>
            </button>
          </div>
          <div className="flex gap-2.5 md:gap-4 items-center"
          >
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link to="">
              <UserIcon size={20} className="md:hidden"/>
              <UserIcon size={32} className="hidden md:block"/>
            </Link>
            <Link to="">
              <ShoppingCartIcon size={20} className="md:hidden" />
              <ShoppingCartIcon size={32} className="hidden md:block" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar