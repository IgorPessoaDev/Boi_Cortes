import jupiter from "../../assets/jupiter.png";
import marte from "../../assets/marte.png";
import terra from "../../assets/terra.png"

export function Main() {
  return (
    <>
      <main className="mx-12 mt-20 lg:mx-32 ">
        <img className="absolute -top-2 -left-20 -z-10 w-64 h-64" src={jupiter} alt="" />
        <section id="home" className="py-10 text-center border-b-2 border-violet-600">
          <h1 className="text-white font-p text-3xl">Deixe seu Cabelo na Régua com Boi Cortes</h1>
          <button className="py-4 px-8 rounded-md font-p text-base my-4 bg-violet-700 hover:bg-violet-600 ">
            Marcar Horário
          </button>

          {/* <img className="inline w-64 h-64" src={jupiter} alt="" />
          <img className="inline w-64 h-64" src={marte} alt="" />
          <img className="inline w-64 h-64" src={terra} alt="" /> */}
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
      </main>
    </>
  )
}