import avatar from "../../assets/Avatar.png";

export default function Review({contents}) {
    return (
        <div className={`flex flex-col w-[292px] items-start gap-4`}>
            <div className={`flex flex-col p-4 items-start gap-4 self-stretch 
                        rounded-2xl border border-Gray-200 bg-white`}>
                <p className={`text-Gray-600 font-medium leading-6`}>
                    {contents}
                </p>
                <div className={`flex gap-3 items-center`}>
                    <img className={`w-10 h-10 rounded-full`} src={avatar} alt="avatar"/>
                    <div className={`flex flex-col items-start`}>
                        <p className={`text-Gray-700 font-semibold leading-5`}>Olivia Rhye</p>
                        <p className={`text-Gray-600 leading-5`}>Architect</p>
                    </div>
                </div>
            </div>
        </div>
    )

}