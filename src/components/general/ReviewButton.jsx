export default function ReviewButton({onClick}) {
    return (
        <button className={`max-w-[80px] flex px-3 py-1 justify-center items-center border-2 rounded-2xl 
                    text-Brand-700 text-md font-medium bg-Brand-50`}
        onClick={onClick}
        >
            Reviews
        </button>
    )
}