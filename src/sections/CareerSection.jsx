import CareerHeader from "../components/CareerSection/CareerHeader.jsx";
import CareerMainImg from "../components/CareerSection/CareerMainImg.jsx";
import CareerReview from "../components/CareerSection/CareerReview.jsx";
import CareerStrengths from "../components/CareerSection/CareerStrengths.jsx";

/**
 * The career section, including a header, a main image, a review area, and a list of company's strengths
 */
export default function CareerSection() {
    return (
        <div className='flex flex-col items-center py-24 gap-16 self-stretch'>
            <CareerHeader/>
            <CareerMainImg/>
            <CareerReview/>
            <CareerStrengths />
        </div>
    )
}