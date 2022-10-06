
const Precios = () => {
  return (
    <section className="contenedor" id="precios">
      <div className="flex md:justify-center my-16 md:my-24">
        
        <div className="md:shadow-2xl p-10 md:rounded-2xl w-full md:w-1/2 md:h-1/2 md:bg-white">
          <h2 className="font-mulish font-light text-4xl md:text-5xl mb-8 text-center md:text-left">Precios</h2>
          <ul className="flex flex-col items-center gap-5 font-mulish font-extralight text-xl lg:text-3xl">
            <li className="flex items-center gap-16 lg:gap-40">
              <p>Corte Completo</p>
              <p>$200</p>
            </li>
            <li className="flex items-center gap-16 lg:gap-40">
              <p>Corte Completo</p>
              <p>$200</p>
            </li>
            <li className="flex items-center gap-16 lg:gap-40">
              <p>Corte Completo</p>
              <p>$200</p>
            </li>
            <li className="flex items-center gap-16 lg:gap-40">
              <p>Corte Completo</p>
              <p>$200</p>
            </li>
            <li className="flex items-center gap-16 lg:gap-40">
              <p>Corte Completo</p>
              <p>$200</p>
            </li>
          </ul>
        </div>

        <img className="hidden md:block w-1/2 -ml-20 mt-36 -z-50 " src="/img/horario.png" alt="" />
      </div>
    </section>
  )
}

export default Precios