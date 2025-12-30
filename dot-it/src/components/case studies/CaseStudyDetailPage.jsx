
import SocialShare from "./SocialShare";
export default function CaseStudyDetail({ caseStudy, }) {
    return (
        <>
            <section className="py-20 ">
                <div className="container">
                    <div className="flex flex-col items-start gap-9.5">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#373940]">Challenge:</h2>
                            <p className="mt-3  text-base sm:text-lg leading-6 sm:leading-7 text-start text-[#777B8B]">{caseStudy.content.challenge}</p>
                        </div>
                        <div className="">
                            <h2 className="text-xl font-medium text-[#373940]">Key problems included: </h2>
                            <ul className="mt-3 flex flex-col items-start gap-2 list-disc">
                                {caseStudy.content.problems.map((problem, index) => (
                                    <li key={index} className="text-base sm:text-lg leading-6 sm:leading-7 text-[#777B8B] ms-4 ">{problem}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h2 className="text-2xl font-semibold text-[#373940]">Solutions:</h2>
                            <p className="mt-3  text-base sm:text-lg leading-6 sm:leading-7 text-start text-[#777B8B] ">{caseStudy.content.solution}</p>

                        </div>
                        <div className="">
                            <h2 className="text-2xl font-semibold text-[#373940]">How Dot.it Helped:</h2>
                            <ul className="mt-3 flex flex-col items-start gap-2 list-disc">
                                {caseStudy.content.howDotItHelped.map((problem, index) => (
                                    <li key={index} className="text-base sm:text-lg leading-6 sm:leading-7 text-[#777B8B] ms-4 ">{problem}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="grid sm:grid-cols-3 gap-8  max-w-[791px] w-full">
                            {caseStudy.content.results.metrics.map((card, index) => (
                                <div key={index} className="p-6 rounded-xl bg-[#FDFDFD] border border-[#F5F5F5] flex flex-col items-start gap-4 w-full">
                                    <h3 className="text-2xl font-semibold leading-8 text-[#014DA1]">{card.value}</h3>
                                    <span className="text-base leading-6 text-[#5D606D]">{card.label}</span>
                                </div>
                            ))}

                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-[#373940]">Value Added:</h2>
                            <p className="mt-3  text-base sm:text-lg leading-6 sm:leading-7 text-start text-[#777B8B] ">{caseStudy.content.valueAdded}</p>
                        </div>
                        <div className="mt-8 ">
                            <h2 className="text-xl font-semibold text-[#373940] leading-7.5">Share Article</h2>
                            <SocialShare caseStudy={caseStudy} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}