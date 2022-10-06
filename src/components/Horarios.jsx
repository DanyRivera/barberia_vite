
const Horarios = () => {
    return (
        <section className="contenedor" id="horarios">
            <h2 className="font-mulish font-light text-5xl mt-36 text-center md:text-left">Horarios</h2>

            <div className="my-16 grid md:grid-cols-4 gap-10">
                {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <div key={num}>
                        <p className="border-2 py-3 text-center text-2xl">Lunes</p>
                        <p className="mt-3 text-center font-mulish font-bold text-xl">10:00 am - 7:00 pm</p>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Horarios