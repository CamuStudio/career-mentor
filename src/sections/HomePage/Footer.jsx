import Logo from '../../assets/LogoWithText.png'

export default function Footer() {
    return (
        <footer className={`flex flex-col gap-2.5 items-center  bg-Gray-900 relative`}>
            {/*<div className="w-full h-24 flex-shrink-0 flex-1 rounded-b-3xl bg-red-500"></div>*/}
            <div className="h-24 w-full rounded-b-3xl bg-Gray-50"></div>
                <div className={`flex flex-col gap-8 items-center pt-16 pb-12`}>
                    <div className={`flex flex-col items-start w-[1280px] px-8 gap-12`}>
                        <div className={`flex items-start gap-8`}>
                            <p className={`text-Gray-50 font-semibold leading-6`}>
                                become a mentor
                            </p>
                            <p className={`text-Gray-50 font-semibold leading-6`}>
                                become a mentor
                            </p>
                            <p className={`text-Gray-50 font-semibold leading-6`}>
                                become a mentor
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`flex w-[1280px] flex-col gap-8 items-start px-8`}>
                    <div className={`h-[1px] w-full bg-Gray-600`}></div>
                    <div className={`self-stretch flex justify-between items-center`}>
                        <div className={`flex w-[384px] items-center gap-8`}>
                            <img src={Logo} alt='logo'/>
                        </div>
                        <p className={`text-Gray-50 text-sm leading-5`}>
                            © 2077 Untitled UI. All rights reserved.
                        </p>
                    </div>
                </div>
        </footer>
)
}