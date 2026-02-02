import { useNavigate } from "react-router-dom"
import { Burgers } from "../assets/assets"
import { Burgers_en } from "../assets/assets_en"

import { Menu_Card } from "../component/CardMenu"
import { HeaderSection } from "../component/HeaderSection"
import { Button } from "@mui/material"
import { getLanguage } from "../hooks/Context"


const MenuSection = () => {
    const { lang } = getLanguage();
    const burgersList = lang === 'fi' ? Burgers : Burgers_en;

    const nav = useNavigate()
    const GoTo = (e) => {
        window.scrollTo('0', '0')
        nav(`/${e}`);
    }
    return (
        <div className="container px-5 py-16">

            {/* Section Header */}
            <div data-aos="fade-up" data-aos-delay="100">
                <HeaderSection
                    text_head={lang === 'fi' ? 'Menuumme' : 'Our Menu'}
                    sub_text={lang === 'fi'
                        ? 'Tuoreita hampurilaisia ja lisukkeita, jotka tyydyttävät jokaisen nälän.'
                        : 'Freshly prepared burgers and sides that will satisfy every craving.'
                    }
                />
            </div>


            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {burgersList.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        data-aos-duration="800"
                    >
                        <Menu_Card
                            onClick={() => GoTo(`/burger/${item.id}`)}
                            image={item.image}
                            head={item.name}
                            content={item.price}
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-15">
                <Button
                    variant="outlined"
                    onClick={() => GoTo('menu')}
                    sx={{
                        color: 'orange',
                        borderColor: 'orange',
                        "&:hover": { backgroundColor: "transparent" },
                    }}
                >
                    {lang === 'fi' ? 'Näytä lisää' : 'See More'}
                </Button>
            </div>

        </div>
    )
}

export default MenuSection
