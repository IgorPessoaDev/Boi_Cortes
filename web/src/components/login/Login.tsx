import { Eye, EyeSlash, SignIn, X, CircleNotch } from "phosphor-react";
import { useState } from "react"
import { api } from "../../lib/api"

interface props {
  handLogin: () => void,
  register: boolean
}
function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay));
}
const lognome = sessionStorage.nome;
const logSenha = sessionStorage.senha;
const logIsAdmin = sessionStorage.isAdmin;

export function Login({ handLogin, register }: props) {
  const [nome, setNome] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [senha, setSenha] = useState('');
  const [visible, setVisible] = useState(false)
  const [check, setcheck] = useState(true)
  const [loading, setLoading] = useState(false)

  function visibleset() {
    visible ? setVisible(false) : setVisible(true)
  }

  async function logar() {
    console.log(nome, senha)
    await api.post(`/login`, {
      nome: nome,
      senha: Number(senha)
    })
      .then((res) => {
        console.log('passou')
        setcheck(true)
        setLoading(true)
        if (nome === res.data.data[0].nome && Number(senha) === res.data.data[0].senha) {
          sessionStorage.login = "OK";
          sessionStorage.nome = res.data.data[0].nome;
          sessionStorage.senha = res.data.data[0].senha;
          sessionStorage.isAdmin = res.data.data[0].isAdmin;

          setTimeout(() => {
            setLoading(false)
            handLogin()
          }, 1500);

          console.log(sessionStorage.login)
        } else {
          console.error(res);
        }

      })
      .catch((err) => {
        console.log(err),
          setcheck(false)
        console.log(check)
      })
  }

  async function verification() {
    await api.post('/verification', {
      nome
    })
      .then((res) => {
        console.log(res)
        if (res.data.data === null) {
          setcheck(true)
          registre()
        } else {
          setcheck(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }
  async function registre() {
    await api.post('/users', {
      nome,
      senha: Number(senha),
      isAdmin: false
    })
      .then((res) => {
        console.log(res)
        setTimeout(() => {
          setLoading(false)
          handLogin()
        }, 1500);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (

    <>
      <div className={loading ? "absolute w-screen h-full flex justify-center items-center" : "hidden"}>
        <CircleNotch size={32} className="text-violet-600 animate-spin" />
      </div>
      <div className={loading ? "hidden" : "w-screen h-full md:flex md:justify-center md:items-center"}>
        <h1 className="fixed top-3 left-8 font-quiksand text-2xl lg:text-2xl text-zinc-50">Boi <span className="text-violet-500">Cortes</span> </h1>
        <X size={32} weight="bold" className="fixed top-4 right-8 font-quiksand text-xl lg:text-2xl text-zinc-50 hover:text-violet-600" onClick={handLogin} />

        <div className="mt-24 mx-5 grid gap-y-3">
          <h1 className="text-white font-quiksand text-2xl"><SignIn size={32} className="text-violet-600 inline" /> Faça seu {register ? "registro" : "login"}</h1>
          {check ? '' : <p className="text-red-600 inline text-lg">{register ? "O nome já existi no sistema adicione um apelido" : "Nome ou senha entao errados"}</p>}
          <label htmlFor="text" className="font-dm text-xl text-zinc-400 block">Nome </label>
          <input type="text" name="" id="name" placeholder="Digite o seu nome" tabIndex={0} className={check ? "bg-transparent p-2 text-white border border-zinc-500 rounded-md placeholder-zinc-500 focus:border-violet-600 focus:ring-violet-600 focus:ring-2 focus:outline-none" : "bg-transparent p-2 text-white border border-red-600 rounded-md placeholder-zinc-500 focus:border-violet-600 focus:ring-violet-600 focus:ring-2 focus:outline-none"} onChange={event => setNome(event.target.value)} />
          <label htmlFor="text" className="font-dm text-xl text-zinc-400 block">Senha </label>
          <div className="grid grid-cols-4 gap-x-4">
            <input type={visible ? "text" : "password"} name="" id="senha" placeholder="Digite o sua senha" className="col-span-3 bg-transparent p-2 text-white border border-zinc-500 rounded-md placeholder-zinc-500 focus:border-violet-600 focus:ring-violet-600 focus:ring-2 focus:outline-none" onChange={event => setSenha(event.target.value)} />
            <button onClick={visibleset} className="">{visible ? <EyeSlash size={32} className="text-violet-700 inline" /> : <Eye size={32} className="text-violet-700 inline" />}</button>
          </div>{
            register ? <button type="button" onClick={() => verification()} className="py-2 px-8 rounded-md font-p text-base my-2 text-white bg-violet-700 hover:bg-violet-600" >Registre-se</button> : <button type="button" onClick={() => logar()} className="py-2 px-8 rounded-md font-p text-base my-2 text-white bg-violet-700 hover:bg-violet-600" >Login</button>
          }

          <a href="#" className="text-violet-600 text-base mt-5">faça seu {register ? "login" : "registro"} ?</a>
        </div>
      </div>
    </>
  )
}
// onChange={event => setSenha(event.target.value)}