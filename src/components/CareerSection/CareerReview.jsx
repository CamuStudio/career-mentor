import ReviewButton from "../general/ReviewButton.jsx";

export default function CareerReview() {
    return (
        <div className='flex flex-col justify-center items-center w-[1280px] px-8 gap-5 '>
            <div className={`w-[768px] flex flex-col self-center items-center gap-4`}>
                <ReviewButton onClick={() => console.log('clicked')} />
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