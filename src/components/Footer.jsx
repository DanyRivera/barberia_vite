import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    const date = new Date();
    const currentDate = date.getFullYear();

    return (
        <footer className='mt-48 bg-[#D9D9D9]' id='contacto'>
            <div className='contenedor flex flex-col md:flex-row gap-5 md:justify-between md:items-center py-8'>

                <h3 className='font-mulish font-medium text-2xl text-[#565656]'>Barbería</h3>

                <div className='flex flex-col md:flex-row gap-8 font-mulish font-black tracking-wider text-[#565656] my-5 md:my-0'>
                    <a>Precios</a>
                    <a>Horarios</a>
                    <a>Ubicación</a>
                </div>
                <div className='flex gap-5'>
                    <a href="#">
                        <FontAwesomeIcon className='text-[#565656] w-7 h-7' icon={faInstagram} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className='text-[#565656] w-7 h-7' icon={faFacebookF} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className='text-[#565656] w-7 h-7' icon={faTiktok} />
                    </a>
                </div>
            </div>
            <p className='bg-[#969595] py-5 text-center text-white tracking-wide'>&copy; {currentDate} Barbería Todos los derechos Reservados</p>
        </footer>
    )
}

export default Footer