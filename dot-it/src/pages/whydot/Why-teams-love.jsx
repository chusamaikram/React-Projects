
import { SaveHoures, IncreaseCrm, ReduceManual, Insights, Switching, BoostSales } from "../../assets/svgs"
export default function WhyTeamsLove() {

    const CardsData = [
        {
            icon: <SaveHoures />,
            title: "Save Hours Every Week",
            desc: "Eliminate repetitive admin tasks. Spend less time updating CRM and more time closing deals.",
        },
        {
            icon: <IncreaseCrm />,
            title: "Increase CRM Adoption",
            desc: "No more skipped updates. dot.it makes CRM effortless, so your team actually uses it.",
        },
        {
            icon: <ReduceManual />,
            title: "Reduce Manual Data Entry",
            desc: "Log emails, meetings, and notes automatically no copy paste required.",
        },
        {
            icon: <Insights />,
            title: "Real-time Insights in Email",
            desc: "See deal context, pipeline stage, and customer data without leaving your inbox.",
        },
        {
            icon: <Switching />,
            title: "No More Tab-Switching",
            desc: "Work faster and smarter. Handle CRM tasks directly in your inbox without losing focus.",
        },
        {
            icon: <BoostSales />,
            title: "Boost Sales Productivity",
            desc: "Focus on selling, not systems. dot.it helps your team hit targets with less friction.",
        },
    ]
    return (
        <>
            <section className="py-20 bg-[#E6EFFA]">
                <div className="container">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-4xl leading-11 font-semibold text-[#011A35]">Why teams love <span className="text-[#0160C9]">dot.it</span></h2>
                        <p className="text-lg font-7 text-center">Over hundreds of users have requested early access to transform their workflows</p>
                    </div>
                    <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CardsData.map((card, index) => (
                            <div key={index} className="bg-white rounded-3xl p-5 h-65 flex flex-col items-start justify-between">
                                <div className="w-12 h-12 bg-[#0160C9] rounded-lg flex items-center justify-center">{card.icon}</div>
                                <div>
                                    <h3 className="text-xl leading-7.5 font-medium mb-2">{card.title}</h3>
                                    <p className="text-lg text-[#535862] ">{card.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}