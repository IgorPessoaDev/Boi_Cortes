import { Eye, EyeSlash, SignIn } from "phosphor-react";
import { useState } from "react"
import { api } from "../../lib/api"

interface props {
  handLogin: () => void,
}

const lognome = sessionStorage.nome;
const logSenha = sessionStorage.senha;
const logIsAdmin = sessionStorage.isAdmin;

export function Login({ handLogin }: props) {
  const [nome, setNome] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [senha, setSenha] = useState('');
  const [visible, setVisible] = useState(false)

  function visibleset() {
    visible ? setVisible(false) : setVisible(true)
  }

  async function logar() {
    await api.post(`/login`, {
      nome: nome,
      senha: Number(senha)
    })
      .then((res) => {
        if (nome === res.data.data[0].nome && Number(senha) === res.data.data[0].senha) {
          sessionStorage.login = "OK";
          sessionStorage.nome = res.data.data[0].nome;
          sessionStorage.senha = res.data.data[0].senha;
          sessionStorage.isAdmin = res.data.data[0].isAdmin;

          handLogin()
          console.log(sessionStorage.login)
        } else {
          console.error(res.data);
        }

      })
      .catch((err) => {
        console.log(err);

      })
  }

  return (
    <>
      <div className="w-screen h-full lg:flex lg:justify-center lg:items-center">
        <h1 className="fixed top-3 left-8 font-quiksand text-xl lg:text-2xl text-zinc-50">Boi <span className="text-violet-500">Cortes</span> </h1>
        <div className="mt-12 mx-5 grid gap-y-3">
          <h1 className="text-white font-quiksand text-2xl"><SignIn size={32} className="text-violet-600 inline" /> Faça seu login</h1>

          <label htmlFor="text" className="font-dm text-xl text-zinc-400 block">Nome </label>
          <input type="text" name="" id="" placeholder="Digite o seu nome" className="bg-transparent p-2 text-white border border-zinc-500 rounded-md placeholder-zinc-500 focus:border-violet-600 focus:ring-violet-600 focus:ring-2 focus:outline-none" />
          <label htmlFor="text" className="font-dm text-xl text-zinc-400 block">Senha </label>
          <div className="grid grid-cols-4 gap-x-4">

            <input type={visible ? "text" : "password"} name="" id="" placeholder="Digite o sua senha" className="col-span-3 bg-transparent p-2 text-white border border-zinc-500 rounded-md placeholder-zinc-500 focus:border-violet-600 focus:ring-violet-600 focus:ring-2 focus:outline-none" />
            <button onClick={visibleset} className="">{visible ? <EyeSlash size={32} className="text-violet-700 inline" /> : <Eye size={32} className="text-violet-700 inline" />}</button>
          </div>
        </div>
      </div>
    </>
  )
}
// onChange={event => setSenha(event.target.value)}