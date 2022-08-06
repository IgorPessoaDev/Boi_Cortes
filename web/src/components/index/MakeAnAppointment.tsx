import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

export function MakeAnAppointment() {
  const [value, onChange] = useState(new Date());

  return (
    <>

      <Calendar onChange={onChange} value={value} minDate={new Date()} onClickDay={(value, event) => console.log("clicou : ", value)} calendarType={"US"} />
    </>
  )
}
