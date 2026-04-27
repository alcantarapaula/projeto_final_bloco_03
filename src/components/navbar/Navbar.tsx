import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8"
        >
          <Link to="/home" className="text-2xl font-bold">
          Farmácia PA+
          </Link>
          <div className="flex gap-4"
          >
            <Link to="" className="hover:underline">
              Categorias
            </Link>
            <Link to="" className="hover:underline">
              Cadastrar Categorias
            </Link>
            <Link to="">
              <UserIcon size={32}/>
            </Link>
            <Link to="">
              <ShoppingCartIcon size={32}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar