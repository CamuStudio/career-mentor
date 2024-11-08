import mail from "../../assets/mail.svg";
import zap from "../../assets/zap.svg";
import barChart from "../../assets/bar-chart-2.svg";
import Strength from "./strengths/Strength.jsx";

const STRENGTHS = [
    {
        iconSrc: mail,
        title: "Share team inboxes",
        contents: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        iconSrc: zap,
        title: "Deliver instant answers",
        contents: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
        iconSrc: barChart,
        title: "Manage your team with reports",
        contents: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
    }
]

export default function CareerStrengths() {
    return (
        <div className={`flex w-[1280px] px-8 items-start gap-8`}>
            {STRENGTHS.map((strength, i) => (
                <Strength key={i}
                          iconSrc={strength.iconSrc}
                          title={strength.title}
                          contents={strength.contents} />
            ))}
        </div>
    );
}