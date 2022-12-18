import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

interface Props {
  handMake: () => void
}

export function MakeAnAppointment({ handMake }: Props) {
  const [value, onChange] = useState(new Date());
  console.log(new Date().getDate())
  const date = new Date();

  return (
    <>
      {/* <Calendar onChange={onChange} value={value} onClickDay={(value, event) => console.log("clicou : ", value)} calendarType={"US"} /> */}
      <h1 className="text-white text-2xl italic">Marque o seu Horário</h1>
      <input type="date" name="make" id="make" />

    </>
  )
}
