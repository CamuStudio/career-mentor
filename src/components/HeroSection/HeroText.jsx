export default function HeroText() {
    return (
        <div className='flex flex-col items-center w-[1024px] gap-6'>
            <p className={`flex flex-col items-center gap-4 self-stretch text-Brand-900 text-center 
                        font-sans text-5xl leading-11 font-semibold`}
            >
                Find a mentor has a similar path
            </p>
            <p className={`flex flex-col items-center gap-4 self-stretch text-center 
                        font-sans text-xl text-Brand-700 leading-8`}
            >
                The latest industry news, interviews, technologies, and resources.
            </p>
        </div>
    )
}