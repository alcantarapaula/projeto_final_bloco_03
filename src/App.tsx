import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
    <BrowserRouter>
    {/* Todos os elementos ocupam no mínimo a tela inteira */}
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Navbar e Footer possuem tamanhos fixos, demais páginas/componentes se expandem para ocupar o espaço que sobra */}
      <div className="flex flex-1">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
