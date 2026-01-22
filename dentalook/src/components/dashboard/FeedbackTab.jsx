// import React, { useState } from 'react'

// import { FbIcon1, FbIcon2, FbIcon3, FbIcon4, FbIcon5 } from '../../assets/svg';

// const feedbackOptions = [
//     { id: 1, label: "Very Bad", icon: <FbIcon1 /> },
//     { id: 2, label: "Bad", icon: <FbIcon2 /> },
//     { id: 3, label: "Good", icon: <FbIcon3 /> },
//     { id: 4, label: "Very Good", icon: <FbIcon4 /> },
//     { id: 5, label: "Excellent", icon: <FbIcon5 /> },
// ];
// const FeedbackTab = () => {
//     const [rating, setRating] = useState(null);
//     const [description, setDescription] = useState("");
//     return (
//         <div className="w-full max-w-lg space-y-4">
//             {/* Title */}
//             <p className="text-[11px] text-[#63716E] font-medium font-['DM_Sans']">
//                 How would you rate the experience?
//             </p>

//             {/* Rating Icons */}
//             <div className="flex items-center gap-6">
//                 {feedbackOptions.map((item) => (
//                     <button
//                         key={item.id}
//                         onClick={() => setRating(item)}
//                         className={`text-3xl transition-transform
//               ${rating?.id === item.id
//                                 ? "scale-125"
//                                 : "opacity-50 hover:opacity-100"}
//             `}
//                     >
//                         <span>

//                             {item.icon}
//                         </span>
//                     </button>
//                 ))}
//             </div>

//             {/* Description */}
//             <div>
//                 <p className="text-[11px] font-medium font-['DM_Sans'] text-[#63716E] mb-1.5">
//                     Please provide details on your experience with this ticket
//                 </p>
//                 <textarea
//                     placeholder="Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="w-full h-9 px-3 py-2 text-xs border bg-[#F7F7F7] text-[#203430] rounded-xl resize-none focus:outline-none"
//                 />
//             </div>
//         </div>
//     )
// }

// export default FeedbackTab


import React, { useState } from "react";
import { FbIcon1, FbIcon2, FbIcon3, FbIcon4, FbIcon5 } from "../../assets/svg";

const feedbackOptions = [
    { id: 1, label: "Very Bad", icon: <FbIcon1 /> },
    { id: 2, label: "Bad", icon: <FbIcon2 /> },
    { id: 3, label: "Good", icon: <FbIcon3 /> },
    { id: 4, label: "Very Good", icon: <FbIcon4 /> },
    { id: 5, label: "Excellent", icon: <FbIcon5 /> },
];

const FeedbackTab = () => {
    const [rating, setRating] = useState(null);
    const [description, setDescription] = useState("");

    return (
        <div className="w-full max-w-lg font-['DM_Sans'] space-y-5">
            {/* Title */}
            <p className="text-[11px] text-[#63716E] font-medium">
                How would you rate the experience?
            </p>

            {/* Rating Icons with Tooltip */}
            <div className="flex items-center gap-6">
                {feedbackOptions.map((item) => {
                    const isActive = rating?.id === item.id;

                    return (
                        <div key={item.id} className="relative group">
                            <button
                                type="button"
                                aria-label={item.label}
                                onClick={() => setRating(item)}
                                className={`transition-all duration-200
                  ${isActive
                                        ? "scale-125 opacity-100"
                                        : "opacity-50 hover:opacity-100 hover:scale-110"}
                `}
                            >
                                {item.icon}
                            </button>

                            {/* Tooltip */}
                            {!isActive && (
                                <div
                                    className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2
                             pointer-events-none whitespace-nowrap
                             rounded-md bg-gray-800 px-2 py-1
                             text-[10px] text-white
                             opacity-0 translate-y-1
                             group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-200"
                                >
                                    {item.label}
                                    <div className="absolute left-1/2 top-full -translate-x-1/2
                                  border-4 border-transparent border-t-[#203430]" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Description */}
            <div>
                <p className="text-[11px] font-medium text-[#63716E] mb-1.5">
                    Please provide details on your experience with this ticket
                </p>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-20 px-3 py-2 text-xs
                     bg-[#F7F7F7] text-[#203430]
                     rounded-xl resize-none
                     border border-transparent
                     focus:outline-none focus:border-[#81BD41]"
                />
            </div>
        </div>
    );
};

export default FeedbackTab;
