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
    <div className="w-screen h-screen flex justify-center items-center bg-purple-600">
      <div className="w-64 h-72 flex justify-center items-center gap-2 flex-col bg-gray-600 rounded-">
        <input type="text" placeholder="digite o seu nome/apelido" className="p-1 bg-transparent outline-none border focus:bg-gray-700" onChange={event => setNome(event.target.value)} />


        <input type="password" minLength={4} placeholder="digite sua senha" inputMode="numeric" className="p-1 bg-transparent outline-none border focus:bg-gray-700" onChange={event => setSenha(event.target.value)} />

        <button className='bg-purple-700 px-6 py-3 rounded-md text-gray-400 hover:bg-purple-500 hover:text-white' onClick={() => logar()} >login</button>
      </div>
    </div>
  )
}