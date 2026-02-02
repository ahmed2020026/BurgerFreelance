import { assets } from "../assets/assets"
import { BtnClick } from "../component/BtnClick"
import { getLanguage } from "../hooks/Context"
import { ScrollTo } from "../hooks/useScroll"

export const CTA = () => {
    const { lang } = getLanguage();
    return (
        <div className="container px-5 py-16">

            <div
                data-aos="fade-right"
                data-aos-delay="150"
                className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-orange-500/40 shadow shadow-orange-500/30"
            >
                {/* Icon */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="shrink-0"
                >
                    <img
                        src={assets.Light}
                        alt="discover"
                        className="w-24 md:w-28 p-2"
                    />
                </div>

                {/* Content */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="text-center md:text-left"
                >
                    <p className="text-gray-400 max-w-xl mb-6 text-lg">
                        {lang === 'fi'
                            ? 'Maista kaupungin parhaat hampurilaiset. Tuoreita raaka-aineita, meheviä pihvejä ja makuja, joita et unohda!'
                            : 'Taste the best burgers in town. Fresh ingredients, juicy patties, and flavors you\'ll never forget!'
                        }
                    </p>

                    <BtnClick
                        Text={lang === 'fi' ? 'Tutustu' : 'Explore'}
                        onClick={() => ScrollTo('menu')}
                    />
                </div>

            </div>

        </div>

    )
}
