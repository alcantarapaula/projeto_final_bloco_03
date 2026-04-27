import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
    <ToastContainer />
    <BrowserRouter>
    {/* Todos os elementos ocupam no mínimo a tela inteira */}
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Navbar e Footer possuem tamanhos fixos, demais páginas/componentes se expandem para ocupar o espaço que sobra */}
      <div className="flex flex-1 bg-cyan-100">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
