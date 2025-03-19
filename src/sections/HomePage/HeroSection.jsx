import HeroText from "../../components/HeroSection/HeroText.jsx";
import Companies from "../../components/HeroSection/Companies.jsx";

/**
 * The hero section
 */
export default function HeroSection() {
    return (
        <div className='flex flex-col items-center py-24 gap-16 self-stretch bg-Brand-50'>
            <div className='flex flex-col items-center w-[1280px] p-8 '>
                <div className='flex flex-col items-center gap-10 self-stretch'>
                    <HeroText/>
                    <div
                        className='flex flex-col items-center w-[592px] h-[64px] p-2 rounded-4xl border-8 border-Success-300'>
                        <input className='flex flex-col items-start gap-1.5 px-3.5 py-2.5 self-stretch' type='text'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start w-[1280px] px-8 gap-8'>
                <p className='self-stretch w-full text-gray-600 text-center font-medium text-base leading-6'>
                    Join 4,000+ companies already growing
                </p>
                <Companies />
            </div>
        </div>
    )
}