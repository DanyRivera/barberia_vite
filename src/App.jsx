import { useState, useEffect } from "react"
import Header from "./components/Header"
import Precios from "./components/Precios"
import Horarios from "./components/Horarios"
import Ubicacion from "./components/Ubicacion"
import Footer from "./components/Footer"
import Up from "./components/Up"

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (offsetY > 105) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  }, [offsetY])

  return (
    <>
      <Header />
      <Precios />
      <Horarios />
      <Ubicacion/>
      <Footer />
      {mostrar && <Up />}
    </>
  )
}

export default App
