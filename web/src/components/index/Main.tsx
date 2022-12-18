import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { InstagramLogo } from "phosphor-react"
import jupiter from "../../assets/jupiter.png";
import marte from "../../assets/marte.png";
import terra from "../../assets/terra.png"
import { Menu } from "./Menu";

interface Props {
  handLogin: () => void,
  register: () => void,
  handMake: () => void
}

export function Main({ handLogin, register, handMake }: Props) {

  return (
    <>
      <Menu handLoginMenu={handLogin} register={register} />
      <main className="mx-12 mt-20 lg:mx-32 ">
        <img className="absolute z-10 -top-2 -left-20 w-64 h-64" src={jupiter} alt="" />
        <section id="home" className="py-10 text-center border-b-2 border-violet-600">
          <img className="w-64 h-64" src={jupiter} alt="" />
          <h1 className="text-white font-p text-3xl">Deixe seu Cabelo na Régua com Boi Cortes</h1>
          <button className="py-4 px-8 rounded-md font-p text-base my-4 bg-violet-700 hover:bg-violet-600 " onClick={handMake}>
            Marcar Horário
          </button>

        </section>
        <section id="prices" className="py-10 text-center border-b-2 border-violet-600">
          <h1 className="text-white font-p text-3xl mb-4">Tabela de Preços</h1>
          <table className="text-white font-dm text-lg table-auto border-separate border-spacing-y-2 border-slate-500">
            <tbody>
              <tr className="">
                <th className="py-2 px-8 border-y-4 border-slate-700">Cabelo</th>
                <td className="border-y-4 border-slate-700">R$ 15,00</td>
              </tr>
              <tr>
                <th className="py-2 px-8 border-y-4 border-slate-700">Song</th>
                <td className="border-y-4 border-slate-700">The Eagles</td>
              </tr>
              <tr>
                <th className="py-2 px-8 border-y-4 border-slate-700">Song</th>
                <td className="border-y-4 border-slate-700">Earth, Wind, and Fire</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="cuts" className="py-10 text-center">
          <h1 className="text-white font-p text-3xl mb-4">Cortes</h1>
          <Carousel infiniteLoop swipeable emulateTouch>
            <div>
              <img src={jupiter} alt="" />
            </div>
            <div>
              <img src={marte} alt="" />
            </div>
            <div>
              <img src={terra} alt="" />
            </div>
          </Carousel>
        </section>

      </main>
      <footer id="contacts" className="flex flex-col gap-4 h-72 px-4 py-10 text-left bg-violet-600">
        <h1 className="font-quiksand text-xl lg:text-2xl text-black ">Boi Cortes</h1>
        <div className="flex gap-3">
          <InstagramLogo size={28} className="block" />
          <a href="" className="font-dm font-medium text-lg">@boi_cortes</a>
        </div>
      </footer>
    </>
  )
}