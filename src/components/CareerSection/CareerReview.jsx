export default function CareerReview() {
    return (
        <div className='flex flex-col justify-center items-center w-[1280px] px-8 gap-5 '>
            <div className={`w-[768px] flex flex-col self-center items-center gap-4`}>
                <button className={`flex px-3 py-1 justify-center items-center border-2 rounded-2xl 
                    text-Brand-700 font-medium bg-Brand-50`}>
                    Reviews
                </button>
                <div className={`text-Gray-900 text-center text-4xl font-semibold leading-[44px] tracking-[-0.72px]`}>
                    Steep in 60 seconds
                </div>
            </div>
            <p className={`text-Gray-600 text-xl text-center`}>
                We’re a 100% remote team spread all across the world. Join us!
            </p>
        </div>
    )
}