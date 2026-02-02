import { assets } from '../assets/assets'
import { About } from '../section/About'

export const AboutPage = () => {
    return (
        <section id='about' className='section relative pt-30 pb-15'>
            <img
                src={assets.Average_image}
                alt="Burger"
                className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
            <About />
        </section>
    )
}
