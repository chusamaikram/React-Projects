import Searchbar from "../../../components/case studies/Searchbar";
import MainHeading from "../../../components/common/MainHeading";

export default function Blogspage() {
    return (
        <>
            <section className="mt-[71px] py-20 bg-[#F5F5F5]">
                <div className="container">
                    <MainHeading coloredText="dot.it" AfterColoredtext="News & Insights" 
                        desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
                        className="max-w-[560px]"
                        descStyle="text-center" />
                    <div className="mt-8 flex items-center justify-center">
                        <form className="flex items-center gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="email"
                                className="py-2 px-4 w-[318px] h-[48px] bg-white rounded-2xl text-base leading-6 text-[#ABAFB1] outline-none"
                                placeholder="Enter your email "
                            />
                            <button className="py-3.5 px-5 bg-[#0160C9] rounded-full text-white text-sm font-medium cursor-pointer " type="submit">Subscribe</button>

                        </form>

                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center justify-between ">
                        <h2 className="text-2xl sm:text-4xl leading-7 sm:leading-11 font-semibold">Featured Articles</h2>
                        <Searchbar placeholder="Search for news or articles" />
                    </div>
                </div>
            </section>
        </>
    )
}