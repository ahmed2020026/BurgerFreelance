import { Burgers, assets } from '../assets/assets'
import { Burgers_en } from "../assets/assets_en";
import { Menu_Card } from '../component/CardMenu'
import { useNavigate } from "react-router-dom"
import { getLanguage } from '../hooks/Context'
import { useCategory } from '../hooks/useCategory';
import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useOutsideClick } from '../hooks/useOutClick';

const MenuPage = () => {
    const { lang } = getLanguage();
    const burgersList = lang === 'fi' ? Burgers : Burgers_en;

    const categories = useCategory(burgersList);
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredBurgers =
        activeCategory === "all"
            ? burgersList
            : burgersList.filter(
                item => item.category === activeCategory
            );

    const [openCategory, setOpenCategory] = useState(false);
    const refCate = useRef(null);
    useOutsideClick(refCate, () => setOpenCategory(false))

    const nav = useNavigate()
    const GoTo = (e) => {
        window.scrollTo('0', '0')
        nav(`/${e}`);
    }
    return (
        <section id='menu' className='section relative pt-10 pb-10'>
            <img
                src={assets.Average_image}
                alt="Burger"
                className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
            />

            <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
            <div className="container px-5 py-16">
                {/* Section Header */}
                <div className='py-5'>
                    <div className='lg:flex justify-between items-center backdrop-blur-lg border border-orange-500/30 p-2 rounded-lg hidden'>
                        {categories.map((category, index) => (
                            <Button onClick={() => setActiveCategory(category)} color='warning' variant={activeCategory === category ? 'contained' : 'outlined'} sx={{
                                borderRadius: '8px'
                            }} size='small' key={index}>{category}</Button>
                        ))}
                    </div>
                    <div className='lg:hidden relative'>
                        <Button onClick={() => setOpenCategory(!openCategory)} size='small' sx={{ textTransform: 'capitalize', border:'1px solid #fa9601', color:'#fa9601' }} variant="outlined" startIcon={<FilterListIcon />}>
                            Filter
                        </Button>
                        <div ref={refCate} className={`absolute left-0 top-full origin-top-left transition-all duration-100 z-10 w-3xs rounded-lg border border-[#fa9601]/50 bg-black/70 backdrop-blur-lg px-2 shadow-lg
                                ${openCategory ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}
                            `}>
                            {categories.map((category, index) => (
                                <Button onClick={() => setActiveCategory(category)} color='warning' variant={activeCategory === category ? 'contained' : 'outlined'} sx={{
                                    borderRadius: '8px',
                                    display: 'block',
                                    width: '100%',
                                    textAlign: 'left',
                                    my: 1
                                }} size='small' key={index}>{category}</Button>
                            ))}
                        </div>


                    </div>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {filteredBurgers.map((item, index) => (
                        <div key={index}>
                            <Menu_Card
                                onClick={() => GoTo(`/burger/${item.id}`)}
                                image={item.image}
                                head={item.name}
                                content={item.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuPage
