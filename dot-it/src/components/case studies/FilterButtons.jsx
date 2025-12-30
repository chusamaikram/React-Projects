
export default function FilterButtons({ categories, handleClick, activeCategory }) {
    return (
        <>
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
        </>
    )
}