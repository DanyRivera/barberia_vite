import React from 'react'

const Ubicacion = () => {
    return (
        <section className="md:mx-24 md:mt-20" >
            <h2 className="font-mulish font-light text-5xl text-center md:text-left">Ubicación</h2>
            <div className='my-16' id='ubicacion'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.278945014648!2d-98.21569206044924!3d19.016648500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc12c855099c7%3A0x17151beeccd6f06f!2sCapitano%20Barber%20Shop!5e0!3m2!1ses-419!2smx!4v1664935119883!5m2!1ses-419!2smx" className='border-none w-full h-[70vh]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Ubicacion