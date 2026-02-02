import { HeaderSection } from "../component/HeaderSection"
import { getLanguage } from '../hooks/Context'

export const About = () => {
    const { lang } = getLanguage();

    return (
        <div className="container px-5">

            <div data-aos="fade-up" data-aos-delay="100">
                <HeaderSection
                    text_head={lang === 'fi' ? 'Tietoa meistä' : 'About Us'}
                    sub_text={''}
                />
            </div>

            <div className="mt-10">
                <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="max-w-4xl mx-auto text-center space-y-6 text-gray-400 leading-relaxed text-lg md:text-xl"
                >
                    <p>
                        {lang === 'fi'
                            ? <>Me <span className="font-bold text-orange-500">Burger Heavenissa</span> uskomme, että loistava hampurilainen on enemmän kuin ateria – se on <span className="italic text-orange-400">kokemus</span>.</>
                            : <>At <span className="font-bold text-orange-500">Burger Heaven</span>, we believe that a great burger is more than just a meal – it's an <span className="italic text-orange-400">experience</span>.</>
                        }
                    </p>

                    <p data-aos="fade-up" data-aos-delay="350">
                        {lang === 'fi'
                            ? 'Tuoreimpien raaka-aineiden hankinnasta jokaisen pihvin täydelliseen paistamiseen, jokainen puraisu kertoo tarinan intohimosta ja omistautumisesta.'
                            : 'From sourcing the freshest ingredients to grilling each patty to perfection, every bite tells a story of <span className="font-semibold text-orange-500">passion and dedication</span>.'
                        }
                    </p>

                    <p data-aos="fade-up" data-aos-delay="450">
                        {lang === 'fi'
                            ? 'Tehtävämme on tuoda <span className="font-bold text-orange-500">iloa, makua ja unohtumattomia hetkiä</span> jokaiselle asiakkaalle, joka astuu ovistamme sisään.'
                            : 'Our mission is to bring <span className="font-bold text-orange-500">joy, flavor, and unforgettable moments</span> to every customer who walks through our doors.'
                        }
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="550"
                        className="text-gray-400 font-semibold mt-4"
                    >
                        {lang === 'fi'
                            ? 'Maista rakkaus, jonka laitamme jokaiseen hampurilaiseen, koska täällä jokainen hampurilainen tehdään sydämellä ❤️'
                            : 'Taste the love we put into every burger, because here, every burger is made with heart ❤️'
                        }
                    </p>
                </div>
            </div>

        </div>

    )
}
