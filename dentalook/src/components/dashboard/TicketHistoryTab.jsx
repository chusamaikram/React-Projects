
import React from 'react'



const statusColors = {
    Received: "border-blue-500 text-blue-500",
    "Assigned - In Progress": "border-orange-500 text-orange-500",
    Stuck: "border-red-400 text-red-400",
    Complete: "border-green-500 text-green-500",
};

function StatusBadge({ status }) {
    if (!status) return null;

    return (
        <span
            className={`px-3 py-1 text-xs rounded-full border ${statusColors[status]
                }`}
        >
            {status}
        </span>
    );
}


const TicketHistoryTab = () => {


    const ticketHistory = [
        {
            id: 1,
            title: "Ticket Created",
            user: "Surya Rana",
            time: "Aug 11, 2025 at 02:22 PM",
            status: null,
        },
        {
            id: 2,
            title: "Ticket Moved to",
            user: "Surya Rana",
            time: "Aug 11, 2025 at 03:00 PM",
            status: "Received",
        },
        {
            id: 3,
            title: "Ticket Moved to",
            user: "Surya Rana",
            time: "Aug 11, 2025 at 03:00 PM",
            status: "Assigned - In Progress",
        },
        {
            id: 4,
            title: "Ticket Moved to",
            user: "Surya Rana",
            time: "Aug 11, 2025 at 03:00 PM",
            status: "Stuck",
        },
        {
            id: 5,
            title: "Ticket Moved to",
            user: "Surya Rana",
            time: "Aug 11, 2025 at 03:00 PM",
            status: "Complete",
        },
    ];

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1.5 top-0 h-full w-px bg-gray-200" />

            {ticketHistory.map((item, index) => (
                <div key={item.id} className="relative flex gap-4 pb-8">
                    {/* Dot */}
                    <div className="relative z-10">
                        <span className="w-3 h-3 bg-gray-400 rounded-full block" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-800">
                                {item.title}
                            </p>
                            <StatusBadge status={item.status} />
                        </div>

                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <img
                                src="https://i.pravatar.cc/20"
                                alt="avatar"
                                className="w-4 h-4 rounded-full"
                            />
                            <span>{item.user}</span>
                            <span>|</span>
                            <span>{item.time}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TicketHistoryTab
