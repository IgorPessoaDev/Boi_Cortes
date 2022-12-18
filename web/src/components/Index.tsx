import { useState } from "react";
import { Main } from "./index/Main";
import { MakeAnAppointment } from "./index/MakeAnAppointment";
import { Menu } from "./index/Menu";
import { Login } from "./login/Login";

export function Index() {

  const [makeAnAppointment, setMakeAnAppointment] = useState(true); //mudar pra False
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState<boolean>(false);

  function handLogin() {
    login ? setLogin(false) : setLogin(true)
    setRegister(false)
  }
  function handRegister() {
    login ? setLogin(false) : setLogin(true)
    register ? setRegister(false) : setRegister(true)
  }
  function handMake() {
    makeAnAppointment ? setMakeAnAppointment(false) : setMakeAnAppointment(true)
  }

  return (

    <>
      {
        login ? <Login handLogin={handLogin} register={register} /> : makeAnAppointment ? <MakeAnAppointment handMake={handMake} /> :
          <Main handLogin={handLogin} register={handRegister} handMake={handMake} />

      }

    </>
  )
}