
const Horarios = () => {
    return (
        <section className="contenedor" id="horarios">
            <h2 className="font-mulish font-light text-5xl text-center md:text-left">Horarios</h2>

            <div className="my-16 grid md:grid-cols-4 gap-10">
                {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <div key={num}>
                        <p className="border-2 py-3 text-center text-2xl">Lunes</p>
                        <p className="mt-3 text-center font-mulish font-bold text-xl">10:00 am - 7:00 pm</p>
                    </div>
                ))}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40 mx-auto -rotate-45 text-[#969595]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                </svg>

            </div>

        </section>
    )
}

export default Horarios