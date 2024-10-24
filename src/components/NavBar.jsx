
export default function NavBar() {
    return (
        <>
            <nav className="w-[1440px] h-[80px] flex flex-col items-center justify-center">
                <div className="w-[1280px] p-8 flex items-center justify-between">
                    <div className="flex gap-x-2.5 items-center">
                        <div className="flex flex-col w-8 h-8 items-center justify-center">
                            <img src='src/assets/logo.svg' alt="Logo"/>
                        </div>
                        <span>Logo</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button
                            className='flex rounded-lg px-4 py-2.5 items-center justify-center font-sans text-base text-Gray-600 font-semibold'>
                            Log in
                        </button>
                        <button className='flex rounded-lg px-4 py-2.5 items-center justify-center bg-Brand-600 shadow-xs font-sans text-base text-white font-semibold'>
                            Sign up
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}