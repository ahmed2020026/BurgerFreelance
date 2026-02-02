import { useParams } from "react-router-dom"
import { assets, Burgers } from "../assets/assets"
import { getLanguage } from "../hooks/Context";
import { Burgers_en } from "../assets/assets_en";


export const BurgerPage = () => {
    const { lang } = getLanguage()
    const { id } = useParams();
    const burger = lang == 'fi' ? Burgers.find(b => b.id === Number(id)) : Burgers_en.find(b => b.id === Number(id));

    if (!burger) return <div>Burger not found!</div>;
    return (
        <section className='relative pt-30 pb-15'>
            <img
                src={assets.Average_image}
                alt="Burger"
                className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>

            <div className="container px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 backdrop-blur-lg p-3 border border-white/20 rounded-md">
                    <div>
                        <img src={burger.image} className="w-full rounded-lg" />
                    </div>
                    <div className="md:col-span-2 text-white p-5 space-y-4">
                        {/* اسم البرجر */}
                        <h1 className="text-3xl md:text-4xl font-bold">{burger.name}</h1>
                        <h2 className="font-medium text-2xl capitalize">{burger.category}</h2>
                        {/* الوصف */}
                        <div className="text-sm md:text-base leading-relaxed text-gray-200">
                            <p dangerouslySetInnerHTML={{ __html: burger.description }} />
                        </div>

                        {/* السعر */}
                        <p className="text-xl font-semibold text-orange-400">{burger.price}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}