import HeroSection from "../sections/HomePage/HeroSection.jsx";
import CareerSection from "../sections/HomePage/CareerSection.jsx";
import FeaturesSection from "../sections/HomePage/FeaturesSection.jsx";
import Footer from "../sections/HomePage/Footer.jsx";
import ReviewsSection from "../sections/HomePage/ReviewsSection.jsx";

export default function HomePage() {
    return (
        <div className="overflow-y-auto">
            <HeroSection />
            <CareerSection />
            <FeaturesSection />
            <ReviewsSection />
            <Footer />
        </div>

    )
}

//display: flex;
// flex-direction: column;
// align-items: flex-start;
// gap: 6px;
// align-self: stretch;

