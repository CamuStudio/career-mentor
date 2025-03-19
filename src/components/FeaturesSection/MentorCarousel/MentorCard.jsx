import bookMark from '../../../assets/bookmark.svg'
import zap from '../../../assets/zap.svg'
import briefCase from '../../../assets/briefcase.svg'
import calendar from '../../../assets/calendar.svg'

export default function MenterCard({mentor}) {
    const {imageUrl, name, previousPosition, currentPosition,
        yearsOfSwitching, yearsOfExperience, company,
        attendance, numOfSessions} = mentor;
    return (
        <div className={`flex flex-col gap-6 w-[300px] p-3 bg-white rounded-lg border border-Gray-200`}>
            <div className={`flex flex-col gap-3`}>
                <div className={`h-80 relative`}>
                    <img className={`h-full w-full rounded-lg object-fill`} src={imageUrl} alt={name}/>
                    <div className={`flex p-2 justify-center items-center border border-Gray-300 
                    bg-white bg-opacity-60 shadow-xs absolute left-2 top-2 rounded-lg`}>
                        <img src={bookMark} alt='bookmark' />
                    </div>
                </div>

                <div className={`flex flex-col gap-2`}>
                    <p className={`text-Gray-900 text-xl font-semibold leading-[30px]`}>{name}</p>
                    <span className={`text-Gray-700 font-medium leading-6`}>
                        {`${previousPosition} -> ${currentPosition}`}
                    </span>
                    <div className={`flex items-center px-2 py-0.5 gap-1 rounded-2xl bg-Brand-50 text-Brand-500`}>
                        <img className={`w-4 h-4`} src={zap} alt='bookmark' />
                        <span className={`font-medium text-sm`}>Switched in {yearsOfSwitching} years</span>
                    </div>
                </div>

                <div className={`flex flex-col gap-1 p-2 rounded-lg bg-Gray-100`}>
                    <div className={`flex items-center gap-1`}>
                        <img src={briefCase} alt='briefCase' />
                        <span className={`text-Gray-700 text-sm font-medium`}>
                            {yearsOfExperience} years
                        </span>
                        <span className={`text-Gray-500 text-sm font-medium`}>
                            at {company}
                        </span>
                    </div>
                    <div className={`flex items-center gap-1`}>
                        <img src={calendar} alt='calendar'/>
                        <span className={`text-Gray-700 text-sm font-medium`}>
                            {attendance}
                        </span>
                        <span className={`text-Gray-500 text-sm font-medium`}>
                            attendance
                        </span>
                        <span className={`text-Gray-700 text-sm font-medium`}>
                            {numOfSessions}
                        </span>
                        <span className={`text-Gray-500 text-sm font-medium`}>
                            sessions
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}