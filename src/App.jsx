import './App.css'
import Menu from './components/Menu'
import Opcioneshombre from './components/Opcioneshombre'
import Opcionesmujer from './components/Opcionesmujer'
import { useState } from 'react'

function App() {

  const [opcion, setOpcion] = useState("menu");

  const Menuopcion = () => {

    setOpcion("menu")
  }

  const Hombreopcion = () => {
    setOpcion("hombre")
  }

  const Mujeropcion = () => {
    setOpcion("mujer")
  }


  return (
    <>
      {opcion === "menu" && (
        <Menu opcion={opcion} menu={Menuopcion} hombre={Hombreopcion} mujer={Mujeropcion} />
      )}

      {opcion === "hombre" && <Opcioneshombre opcion={opcion} menu={Menuopcion}/>}

      {opcion === "mujer" && <Opcionesmujer menu={Menuopcion}/>}
    </>
  );
}
  


  


export default App
