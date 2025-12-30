export default function Pagination({
    currentPage,
    totalPages = 10,
    onPageChange,
}) {
    return (
        <div className="flex items-center justify-between w-full mt-8">
            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-[#D0D5DD] text-sm
          ${currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
            >
                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
                Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-lg text-sm transition
                ${currentPage === page
                                    ? "bg-gray-100 font-semibold text-[#0160C9]"
                                    : "hover:bg-gray-100 font-medium text-[#788393]"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-[#D0D5DD] text-sm
          ${currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
            >
                Next
                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </button>
        </div>
    );
}



// const getPages = (totalPages) => {
//     const pages = [];

//     // 1 → 6
//     for (let i = 1; i <= Math.min(6, totalPages); i++) {
//         pages.push(i);
//     }

//     // Ellipsis if needed
//     if (totalPages > 8) {
//         pages.push("...");
//     }

//     // Last 2 pages
//     if (totalPages > 6) {
//         pages.push(totalPages - 1);
//         pages.push(totalPages);
//     }

//     return pages;
// };
// export default function Pagination({
//     currentPage,
//     totalPages = 10,
//     onPageChange,
// }) {
//     const pages = getPages(totalPages);

//     return (
//         <div className="flex items-center justify-between w-full mt-8">
//             {/* Previous */}
//             <button
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className={`px-4 py-2 rounded-full border
//           ${currentPage === 1
//                         ? "opacity-50 cursor-not-allowed"
//                         : "hover:bg-gray-100"
//                     }`}
//             >
//                 ← Previous
//             </button>

//             {/* Numbers */}
//             <div className="flex items-center gap-2">
//                 {pages.map((page, index) =>
//                     page === "..." ? (
//                         <span key={index} className="px-2 text-gray-500">
//                             ...
//                         </span>
//                     ) : (
//                         <button
//                             key={page}
//                             onClick={() => onPageChange(page)}
//                             className={`w-9 h-9 rounded-md text-sm
//                 ${currentPage === page
//                                     ? "bg-gray-100 font-semibold"
//                                     : "hover:bg-gray-100"
//                                 }`}
//                         >
//                             {page}
//                         </button>
//                     )
//                 )}
//             </div>

//             {/* Next */}
//             <button
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className={`px-4 py-2 rounded-full border
//           ${currentPage === totalPages
//                         ? "opacity-50 cursor-not-allowed"
//                         : "hover:bg-gray-100"
//                     }`}
//             >
//                 Next →
//             </button>
//         </div>
//     );
// }
