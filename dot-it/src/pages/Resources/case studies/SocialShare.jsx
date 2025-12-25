import { XIcon, FbIcon, LinkdelnIcon } from "../../../assets/svgs"


export default function SocialShare({ caseStudy }) {
    // Build full URL dynamically
    const caseUrl = `${window.location.origin}/case-study/${caseStudy.slug}`;
    const shareText = encodeURIComponent(caseStudy.title);

    const hashtags = "CaseStudy,AI,Tech";
    const SocialIcons = [
        {
            icon: <LinkdelnIcon />,
            path: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(caseUrl)}`
        },
        {
            icon: <FbIcon />,
            path: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(caseUrl)}`
        },
        {
            icon: <XIcon />,
            path: `https://x.com/intent/tweet?url=${encodeURIComponent(caseUrl)}&text=${shareText}&hashtags=${hashtags}`
        },

    ]
    return (
        <ul className="mt-3 flex items-center gap-3">
            {SocialIcons.map((icon, index) => (
                <li key={index}>
                    <a className="flex w-10 h-10 rounded-full group bg-[#E6EFFA] hover:bg-[#0160C9] border border-[#B0CEEE] items-center justify-center" href={icon.path} target="_blank" aria-label="Social button" rel="noopener noreferrer">
                        {icon.icon}
                    </a>
                </li>
            ))}

        </ul>
    );
}
