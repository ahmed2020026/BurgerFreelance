import { Hero } from '../section/Hero'
import { Feature } from '../section/Feature'
import MenuSection from '../section/MenuSection'
import { CTA } from '../section/CTA'
import { assets } from '../assets/assets'

export const HomePage = () => {
    return (
        <>
            <section id='home' className="section relative flex items-center">
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={assets.Hero_2}
                    >
                        <source src={assets.Hero_video} type="video/mp4" />
                    </video>
                </div>


                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <Hero />
            </section>

            <section className='relative pt-10 pb-10 bg-black'>
                <CTA />
            </section>

            <section id='menu' className='section relative pt-10 pb-10'>
                <img
                    src={assets.Average_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <MenuSection />
            </section>

            <section id='whyUs' className='section relative pt-10 pb-10'>
                <img
                    src={assets.Average_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <Feature />
            </section>
        </>
    )
}
