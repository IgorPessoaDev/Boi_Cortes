import { useState } from "react";
import { Main } from "./index/Main";
import { MakeAnAppointment } from "./index/MakeAnAppointment";
import { Menu } from "./index/Menu";
import { Login } from "./login/Login";

export function Index() {

  const [makeAnAppointment, setMakeAnAppointment] = useState(false)
  const [login, setLogin] = useState(true)

  function handLogin() {
    login ? setLogin(false) : setLogin(true)
  }

  return (

    <>
      {
        login ? <Login handLogin={handLogin} /> : makeAnAppointment ? <MakeAnAppointment /> :
          <Main />

      }

    </>
  )
}