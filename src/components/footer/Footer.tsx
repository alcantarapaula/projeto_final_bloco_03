import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()


  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-lg md:text-xl font-bold">
            Farmácia PA+ | Copyright: {data}
          </p>
          <p className="text-base md:text-lg">
            Acesse nossas Redes Sociais
          </p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/alcantarapaula/"><LinkedinLogoIcon size={32}/></a>
            <a href="https://github.com/alcantarapaula"><GithubLogoIcon size={32}/></a>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer