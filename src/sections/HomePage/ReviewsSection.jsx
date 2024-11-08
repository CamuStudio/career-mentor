import ReviewButton from "../../components/general/ReviewButton.jsx";
import avatar from '../../assets/Avatar.png'
import Review from "../../components/ReviewsSection/Review.jsx";

export default function ReviewsSection() {
    return (
        <div className={`flex flex-col items-center gap-16 py-24 self-stretch`}>
            <div className={`flex flex-col items-start w-[1280px]`}>
                <div className={`flex flex-col items-start w-[768px] px-8 gap-5`}>
                    <ReviewButton />
                    <p className={`text-Gray-900 text-4xl font-semibold leading-[44px]`}>
                        What others say
                    </p>
                    <p className={`text-Gray-600 text-xl leading-[30px]`}>
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>

            <div className={`flex w-[1280px] px-8 items-center gap-4`}>
                <div className={`flex flex-col items-start gap-4 self-stretch`}>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features.\n' +
                        'Powerful, self-serve product and growth analytics to help you convert, engage.'}/>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features. ' +
                        'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more ' +
                        'users. Trusted by over 4,000 startups..'}/>
                </div>
                <div className={`flex flex-col items-start gap-4 self-stretch`}>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features.\n' +
                        'Powerful, self-serve product and growth analytics to help you convert, engage.'}/>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features.'}/>
                </div>
                <div className={`flex flex-col items-start gap-4 self-stretch`}>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features. ' +
                        'Powerful, self-serve product and growth.'}/>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features. ' +
                        'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more ' +
                        'users. Trusted by over 4,000 startups.'}/>
                </div>
                <div className={`flex flex-col items-start gap-4 self-stretch`}>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features. ' +
                        'Powerful, self-serve product and growth analytics to help you convert.'}/>
                    <Review contents={'Includes up to 10 users, 20GB individual data and access to all features. ' +
                        'Powerful, self-serve product and growth.'}/>
                </div>
            </div>
        </div>
    );
}