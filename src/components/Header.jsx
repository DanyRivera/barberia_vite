import { useState } from "react"
import Barra from "./Barra"
import { Link } from "react-scroll";

const Header = () => {

  const [mostrar, setMostrar] = useState(false);

  return (
    <header className='bg-image h-full'>
      <div className='contenedor'>
        <div className='py-14 flex justify-between items-center'>
          <h1 className='text-white font-medium font-mulish text-3xl md:text-6xl'>Barbería</h1>

          <nav className='hidden text-white font-mulish font-black md:flex gap-10 text-xl'>
            <Link
              className="cursor-pointer"
              to="precios"
              smooth={true}
              duration={1000}
              offset={-150}
            >Precios</Link>
            <Link
              className="cursor-pointer"
              to="ubicacion"
              smooth={true}
              duration={1000}
              offset={-150}
            >Ubicación</Link>
            <Link
              className="cursor-pointer"
              to="horarios"
              smooth={true}
              duration={1000}
              offset={-150}
            >Horarios</Link>
            <Link
              className="cursor-pointer"
              to="contacto"
              smooth={true}
              duration={1000}
              offset={-150}
            >Contacto</Link>
          </nav>

          <button
            onClick={() => setMostrar(true)}
            className="md:hidden cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white" onClick={() => setMostrar(true)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>

        </div>
        <div className='flex flex-col justify-center h-[50vh] md:h-[65vh]'>
          <p className='text-white font-mulish font-bold text-4xl md:text-7xl md:w-[50%] md:tracking-wide tracking-widest md:leading-tight leading-relaxed'>Encuentra el mejor estilo con nostros</p>
        </div>
      </div>

      <Barra setMostrar={setMostrar} mostrar={mostrar} />

    </header>
  )
}

export default Header