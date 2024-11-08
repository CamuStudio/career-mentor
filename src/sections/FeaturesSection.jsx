
/* TODO: update the background*/

import FeaturesHeader from "../components/FeaturesSection/FeaturesHeader.jsx";
import MentorCarousel from "../components/FeaturesSection/MentorCarousel.jsx";


/**
 * The features section, including a header and carousel of mentors
 */
export default function FeaturesSection() {
    return (
        <div className={`flex flex-col py-24 items-center gap-16`}>
            <div className={`flex flex-col gap-16 rounded-4xl bg-Gray-800 border-4 border-Purple-200`}>
                <FeaturesHeader />
                <MentorCarousel />
            </div>
        </div>
    );
}