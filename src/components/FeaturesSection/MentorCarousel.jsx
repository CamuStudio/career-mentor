import mentor1 from '../../assets/mentor1.png'
import mentor2 from '../../assets/mentor2.png'
import mentor3 from '../../assets/mentor3.png'
import mentor4 from '../../assets/mentor4.png'
import MentorCard from "./MentorCarousel/MentorCard.jsx";
import chevLeft from '../../assets/chevron-left.svg'
import chevRight from '../../assets/chevron-right.svg'

const MENTORS = [
    {
        name: "Cheryl Jin",
        imageUrl: mentor1,
        previousPosition: "Architect",
        currentPosition: "Product Designer",
        yearsOfSwitching: 3,
        yearsOfExperience: 8,
        company: "Apple Inc.",
        attendance: "100%",
        numOfSessions: 31
    },
    {
        name: "Cheryl Jin",
        imageUrl: mentor2,
        previousPosition: "Architect",
        currentPosition: "Product Designer",
        yearsOfSwitching: 3,
        yearsOfExperience: 8,
        company: "Apple Inc.",
        attendance: "100%",
        numOfSessions: 31
    },
    {
        name: "Cheryl Jin",
        imageUrl: mentor3,
        previousPosition: "Architect",
        currentPosition: "Product Designer",
        yearsOfSwitching: 3,
        yearsOfExperience: 8,
        company: "Apple Inc.",
        attendance: "100%",
        numOfSessions: 31
    },

    {
        name: "Cheryl Jin",
        imageUrl: mentor4,
        previousPosition: "Architect",
        currentPosition: "Product Designer",
        yearsOfSwitching: 3,
        yearsOfExperience: 8,
        company: "Apple Inc.",
        attendance: "100%",
        numOfSessions: 31
    },
]


export default function MentorCarousel() {
    return (
        <div className={`flex flex-col w-[1280px] gap-4 pt-8 pb-12 px-12`}>
            <div className="flex gap-8 overflow-x-auto w-full items-start"> {/* Horizontal scroll container */}
                {MENTORS.map((mentor, i) => (
                    <div key={i} className="flex-shrink-0 w-[300px]"> {/* Fixed width for each card */}
                        <MentorCard mentor={mentor}/>
                    </div>
                ))}
            </div>
            <div className={`flex p-2 justify-end items-center gap-8`}>
                <button className={`flex p-2 items-center justify-center rounded-2xl bg-Gray-900 backdrop-blur-sm`}>
                    <img src={chevLeft} alt='chevron-left'/>
                </button>
                <button className={`flex p-2 items-center justify-center rounded-2xl bg-Gray-900 backdrop-blur-sm`}>
                    <img src={chevRight} alt='chevron-right'/>
                </button>
            </div>
        </div>
    )
}