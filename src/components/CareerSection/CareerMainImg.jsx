import career from "../../assets/career.png";

/* TODO: Update this image with border */
export default function CareerMainImg() {
    return (
        <div className='flex flex-col items-center gap-24 w-[1280px] px-32'>
            <div className='flex flex-col shrink-0 items-center justify-center rounded-2xl border-1.5'>
                <img src={career} alt="career" />
            </div>
        </div>
    )
}