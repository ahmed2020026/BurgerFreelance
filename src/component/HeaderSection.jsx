export const HeaderSection = ({ text_head, sub_text }) => {
    return (
        <div className="mb-16 text-center">
            <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold text-white mb-6">
                {text_head}
            </h1>
            <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">
                {sub_text}
            </p>
            <div className="mx-auto mt-5 h-1 w-32 bg-orange-500 rounded-full shadow-[0_0_20px_#f97316]"></div>
        </div>
    )
}