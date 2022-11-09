import Slider  from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";

const Gallery = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "5px",
        slidesToShow: 3,
        speed: 500,
        adaptiveHeight: true
    };

    const urlImagemes = [
        '/img/1.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
    ]

    return (
        <section className="contenedor hidden md:block">
            <h2 className="font-mulish font-light text-5xl text-center md:text-left">Galería</h2>

            <Slider  {...settings}>
                {urlImagemes.map((url, index) => (
                    <div key={index} className="my-10 outline-none">
                        <img src={url} alt="Imagen Slide" />
                    </div>
                ))}
            </Slider>

        </section>
    )
}

export default Gallery