import HeroSection from "../sections/HeroSection.jsx";
import CareerSection from "../sections/CareerSection.jsx";

export default function HomePage() {
    return (
        <div className="overflow-y-auto">
            <HeroSection />
            <CareerSection />
        </div>

    )
}

//display: flex;
// flex-direction: column;
// align-items: flex-start;
// gap: 6px;
// align-self: stretch;

