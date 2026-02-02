import { Features } from '../assets/assets'
import { Features_en } from '../assets/assets_en'

import { Feature_Card } from '../component/Card'
import { HeaderSection } from '../component/HeaderSection'
import { getLanguage } from '../hooks/Context'

export const Feature = () => {
    const { lang } = getLanguage();
    const featureList = lang === 'fi' ? Features : Features_en;
    return (
        <div className='container px-5 py-16'>

            {/* Section Header */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <HeaderSection
                    text_head={lang === 'fi'
                        ? 'Miksi hampurilaisemme ovat erityisiä'
                        : 'Why Our Burgers Are Special'}
                    sub_text={lang === 'fi'
                        ? 'Tuoreista raaka-aineista täydelliseen paistamiseen — näin asiakkaat rakastavat meitä.'
                        : 'From fresh ingredients to perfect grilling — here’s why customers love us.'}
                />

            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {featureList.map((feature, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 150}
                        data-aos-duration="700"
                        className="backdrop-blur-md"
                    >
                        <Feature_Card
                            image={feature.icon}
                            head={feature.head}
                            content={feature.content}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
