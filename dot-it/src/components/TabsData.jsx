
export default function TabsData({ heading, desc, img, width, height }) {
    return (
        <>
            <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-col items-start gap-6 max-w-[469px]">
                    <h2 className="text-4xl leading-11 font-semibold">{heading}</h2>
                    <p className="text-2xl leading-8 text-[#535862]">{desc}</p>
                </div>
                <div className="overflow-hidden">
                    <img className="object-contain w-full h-auto " src={img} alt={heading} width={width} height={height} loading="lazy" />
                </div>
            </div>
        </>
    )
}