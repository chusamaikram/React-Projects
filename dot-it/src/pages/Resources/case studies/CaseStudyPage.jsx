
import { useState } from "react";
import CaseStudies from "../../../components/case studies/CaseStudies";
import MainHeading from "../../../components/common/MainHeading";
import Searchbar from "../../../components/case studies/Searchbar";
const categories = [
    "All",
    "Finance",
    "Telecommunication",
    "Automotive",
    "Market Research",
    "Manufacturing",
    "Legal",
    "Aviation",
    "Consulting",
    "Anyone using email and CRM",
];

export default function CaseStudiesPage() {

    const [searchTerm, setSearchTerm] = useState("");

    const [activeCategory, setActiveCategory] = useState("All");


    const handleClick = (category) => {
        setActiveCategory(category);
        onChange(category); // pass value to parent
    };

    return (
        <>
            <section className="bg-[#FAFAFA] mt-[71px] py-20">
                <div className="container">
                    <MainHeading BeforeColoredtext="Success stories powered by " coloredText="dot.it"
                        desc="See how leading teams streamline their sales workflows with dot.it. Discover real success stories from companies transforming their inbox into a powerful CRM hub."
                        headingStyle="max-w-[500px] text-center"
                        descStyle="text-center"
                        className="max-w-[663px]"
                    />


                </div>
            </section>
            <section className="py-8 sm:py-20">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap gap-y-4">
                        <h2 className="text-2xl md:text-4xl font-semibold leading-7 md:leading-11">Read by Industry</h2>
                        <Searchbar placeholder="Search for case studies"
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm} />
                    </div>
                    <div className="mt-8 flex gap-4 border-b border-[#EDEDED] flex-wrap">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleClick(category)}
                                className={`pb-3 px-1 cursor-pointer whitespace-nowrap text-base  transition-colors ${activeCategory === category
                                    ? "text-[#005BAA] border-b-2 border-[#005BAA] font-semibold"
                                    : "text-[#667085] font-medium hover:text-gray-800"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>

                    <CaseStudies activeCategory={activeCategory} searchTerm={searchTerm} />



                </div>
            </section>
        </>
    )
}