import ReviewButton from "../general/ReviewButton.jsx";


export default function FeaturesHeader() {
    return (
        <div className={`flex items-end w-[1280px] gap-8 pt-12 px-12`}>
            <div className={`flex flex-col w-[768px] gap-5`}>
                <ReviewButton onClick={() => console.log('clicked')}/>
                <p className={`text-Gray-100 text-4xl leading-10 font-semibold`}>
                    Cutting-edge features for advanced analytics
                </p>
                <p className={`text-Gray-400 text-xl leading-[30px]`}>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>

            <div className={`flex items-end justify-end flex-grow flex-shrink-0 flex-1 gap-5`}>
                <button className={`flex px-4 py-2.5 shadow-xs border border-Brand-600 
                rounded-lg bg-Brand-600 text-white font-semibold leading-5`}>
                    See all mentors
                </button>
                <button
                    className={`flex px-4 py-2.5 shadow-xs border border-Brand-50 
                    rounded-lg bg-Brand-50 text-Brand-700 font-semibold leading-5`}>
                    Become a mentor
                </button>
            </div>
        </div>
    )
}