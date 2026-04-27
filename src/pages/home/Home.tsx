import ModalProduto from "../../components/produto/modalproduto/ModalProduto"


function Home() {
  return (
    <>
      <section className="bg-cyan-100 flex justify-center w-full">
        <article className="container grid grid-cols-1 md:grid-cols-2">
          <figure
          className="flex justify-center pb-4 md:pb-0 order-first md:order-last"
          >
            <img
            src="https://ik.imagekit.io/paula/homefarmacia.png"
            alt="Imagem Página Home"
            className="w-1/2 md:w-2/3 object-contain"
            />
          </figure>
          <div className="flex flex-col justify-center items-center gap-4 py-4 text-center md:text-left order-last md:order-first">
            <h2 className="text-3xl md:text-5xl font-bold">Seja Bem Vindo!</h2>
            <p
            className="text-lg md:text-xl"
            >Aqui você encontra Medicamentos e Cosméticos</p>
            <ModalProduto />
          </div>
        </article>
      </section>
    </>
  )
}

export default Home