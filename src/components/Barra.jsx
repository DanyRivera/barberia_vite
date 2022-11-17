import { Link } from "react-scroll"

const Barra = ({ setMostrar, mostrar }) => {
  return (
    <aside className={`${mostrar ? 'abrir-menu-animacion' : 'cerrar-menu-animacion'} md:hidden bg-[#D9D9D9] fixed h-full top-0 right-0 w-[75%] p-5`}>
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-2xl font-mulish font-black">Menu</h2>
        <button
          onClick={() => setMostrar(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col gap-5 text-xl font-mulish font-bold">
        <Link
          className="cursor-pointer"
          onClick={() => setMostrar(false)}
          to="precios"
          smooth={true}
          duration={1000}
          offset={-150}
        >Precios</Link>
        <Link
          className="cursor-pointer"
          onClick={() => setMostrar(false)}
          to="ubicacion"
          smooth={true}
          duration={1000}
          offset={-150}
        >Ubicación</Link>
        <Link
          className="cursor-pointer"
          onClick={() => setMostrar(false)}
          to="horarios"
          smooth={true}
          duration={1000}
          offset={-150}
        >Horarios</Link>
        <Link
          className="cursor-pointer"
          onClick={() => setMostrar(false)}
          to="contacto"
          smooth={true}
          duration={1000}
          offset={-150}
        >Contacto</Link>
      </nav>
    </aside>
  )
}

export default Barra