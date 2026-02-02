import { assets } from '../assets/assets'
import { Feature } from '../section/Feature'

export const WhyUs = () => {
    return (
        <section id='whyUs' className='section relative pt-10 pb-10'>
            <img
                src={assets.Average_image}
                alt="Burger"
                className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
            />

            <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
            <Feature />
        </section>
    )
}
