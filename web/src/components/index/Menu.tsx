import { useState } from "react";
import { List, X } from "phosphor-react";
import login from "../../controllers/login";


export function Menu() {
  const [menu, setMenu] = useState(false)

  function menuSet() {
    menu ? setMenu(false) : setMenu(true)
  }

  return (
    <>
      <header className="fixed z-50 top-0 left-0 py-4 w-screen bg-black border-b-2 border-violet-700 shadow-c shadow-shadow ">
        <nav className=" flex justify-start lg:justify-around items-center gap-x-4">

          {menu ?
            <X weight="bold" className="block fixed lg:hidden z-50 left-2 top-2 h-8 w-8 text-violet-600 m-1" onClick={menuSet} /> :
            <List weight="bold" className="block lg:hidden z-50 h-8 w-8 text-violet-600 m-1" onClick={menuSet} />
          }

          <h1 className="font-quiksand text-xl lg:text-2xl text-zinc-50">Boi <span className="text-violet-500">Cortes</span> </h1>

          <div className={(menu ? "fixed z-10 top-0 left-0 w-screen h-screen text-zinc-50 bg-black flex " : "hidden") + " text-zinc-50 lg:flex justify-center items-center gap-8"}>
            <ul className="list-none font-dm text-3xl lg:text-sm text-center grid lg:flex gap-8 ">
              <li className="block"><a href="#home" className="relative transition-[width] after:absolute after:left-0 after:-bottom-4 after:w-0 after:h-0.5 after:bg-violet-600 after:duration-200 hover:after:w-full hover:text-violet-600">Inicio</a></li>
              <li className="block"><a href="#prices" className="relative transition-[width] after:absolute after:left-0 after:-bottom-4 after:w-0 after:h-0.5 after:bg-violet-600 after:duration-200 hover:after:w-full hover:text-violet-600">Preços</a></li>
              <li className="block"><a href="#cuts" className="relative transition-[width] after:absolute after:left-0 after:-bottom-4 after:w-0 after:h-0.5 after:bg-violet-600 after:duration-200 hover:after:w-full hover:text-violet-600">Cortes</a></li>
              <li className="block"><a href="#contacts" className="relative transition-[width] after:absolute after:left-0 after:-bottom-4 after:w-0 after:h-0.5 after:bg-violet-600 after:duration-200 hover:after:w-full hover:text-violet-600">Contatos</a></li>
            </ul>
          </div>

          <div className="text-zinc-50 absolute right-2 font-dm text-sm flex gap-2 lg:gap-4 lg:static">
            <button id="login" className="transition hover:text-neutral-500">Login</button>
            <button id="register" className="px-2 py-2 sm:px-4 sm:py-2 rounded-lg border-2 border-violet-600 hover:border-transparent hover:bg-violet-600">Registre-se</button>
          </div>
        </nav>


      </header>

    </>

  )
}