export default function Strength({iconSrc, title, contents}) {
    return (
        <div className={`flex flex-col flex-grow flex-shrink-0 flex-1 items-center gap-5 `}>
            <div className={`flex w-16 h-16 p-3 items-center justify-center 
                bg-Brand-100 rounded-4xl border-8 border-Brand-50`}>
                <img className={`w-6 h-6 object-contain`} src={iconSrc} alt='mail'/>
            </div>
            <p className={`text-center text-Gray-900 text-xl font-semibold leading-8`}>
                {title}
            </p>
            <p className={`text-center text-Gray-600 leading-6`}>
                {contents}
            </p>
        </div>
    )

}