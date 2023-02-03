import React from "react";
import Slider1 from "react-slick";
import "./About1_1.css"
import Zurag1 from "../assets2/ulirliin_ontslokh_angilal-owliin_sport.webp"
import Zurag2 from "../assets2/ulirliin_ontslokh_angilal-gaduur_huwtsas.webp"
import Zurag3 from "../assets2/owoldoo_beldey_angilal-owliin_gutal.webp"
import Zurag4 from "../assets2/owoldoo_beldey_angilal-malgai_oroolt.webp"
import Zurag5 from "../assets2/owoldoo_beldey_angilal-agaar_tsewershuulegch.webp"
import Zurag6 from "../assets2/huuhdiin_dulaan_tsamts.webp"
import Zurag7 from "../assets2/ulirliin_ontslokh_angilal-vitamin.webp"

const About1_1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        
      } 
       const data = [
        {
            key:1,
            description:'Өвлийн спорт',
            img: Zurag1,
        },
        {
            key:2,
            description:'Гадуур хувцас',
            img: Zurag2,
        },
        {
            key:3,
            description:'Өвлийн гутал',
            img: Zurag3,
        },
        {
            key:4,
            description:'Агааржуулагч & Агаар цэвэршүүлэгч',
            img: Zurag4,
        },
        {
            key:5,
            description:'Хүүхдийн дулаан цамц',
            img: Zurag5,
        },
        {
            key:6,
            description:'Малгай & Ороолт бээлий',
            img: Zurag6,
        },
        {
            key:7,
            description:'Витамин & Эрдэс бодис',
            img: Zurag7,
        },
        
      ]
    return(
        <div className="Undesen">
            <h1>Улиралын онцлох</h1>
            <div className="Boos">
            <Slider1 {...settings}>
            {
                data.map((row)=>(
                    <div>
                        <div className="Banner">
                            <img src={row.img} alt="/" />
                        </div>
                        <div className="B">
                            <h5>{row.description}</h5>
                        </div>  
                    </div>
                ))
            }

            </Slider1>
            </div>
        </div>
    )
}
export default About1_1