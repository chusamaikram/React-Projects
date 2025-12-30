import Button from "../../components/common/Button";
import MainHeading from "../../components/common/MainHeading";

const Career = [
    {
        title: "Account Manager",
        desc: "Own and grow customer relationships by driving adoption, uncovering expansion opportunities, and ensuring long-term account success.",
    },
    {
        title: "Client Development Director",
        desc: "Lead strategic outreach to high-value prospects, build enterprise-level partnerships, and accelerate revenue growth through consultative selling.",
    },
    {
        title: "Business Development Manager",
        desc: "Identify new markets, generate pipeline, and convert qualified opportunities through proactive prospecting and solution-focused engagement.",
    },
    {
        title: "Lead Developer",
        desc: "Architect and guide the technical roadmap while overseeing development execution, ensuring scalable, high-performance product delivery.",
    },
    {
        title: "AI Developer",
        desc: "Design, train, and optimize AI models that power intelligent workflows, predictive insights, and frictionless user experiences across the platform.",
    },
]


export default function Careers() {
    return (
        <>
            <section className="mt-[71px] py-20 bg-[#FAFAFA]">
                <div className="container">
                    <MainHeading
                        BeforeColoredtext="Join"
                        coloredText=" our"
                        AfterColoredtext=" growing team"
                        descStyle="max-w-[636px] text-center"
                        desc="We're hiring creators who want to solve meaningful problems with AI, not chase hype. Our team values clarity, speed, and work that creates lasting impact ."
                    />
                </div>

            </section>
            <section className="py-8 sm:py-20">
                <div className="container">
                    <h2 className="text-4xl font-semibold leading-9.5">Open Roles</h2>
                    <div className="mt-10 grid grid-cols-1 gap-6">
                        {Career.map((career, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex flex-col items-start gap-2">
                                        <h3 className="text-2xl font-medium leading-8">{career.title}</h3>
                                        <p className="text-base font-medium leading-6 text-start md:max-w-[675px] text-[#777B8B]">{career.desc}</p>
                                    </div>
                                    <Button variant="arrow" href="https://tally.so/r/81zKgr" >Apply</Button>
                                </div>
                                {index == 4 ? "" : (<div className="my-6 border-t border-[#E6E9ED] w-full"></div>)}

                            </div>

                        ))}
                    </div>
                </div>
            </section >
        </>

    )
}