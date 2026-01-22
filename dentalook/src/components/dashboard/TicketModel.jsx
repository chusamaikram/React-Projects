import React, { useState } from 'react'
import ChatModel from './ChatModel'
import TicketHistoryTab from './TicketHistoryTab'
import FeedbackTab from './FeedbackTab'

const TicketModel = ({ ticketDetails }) => {

    const [activeTab, setActiveTab] = useState("details")

    const [agent, setAgent] = useState("Assign Agent")

    const [showDescription, setShowDescription] = useState(0)

    const [showDropdown, setShowDropdown] = useState(false)

    const TicketTabs = [
        {
            key: "details",
            name: "Ticket Details"
        },
        {
            key: "history",
            name: "Ticket History"
        },
        {
            key: "review",
            name: "Review and Feedback"
        },

    ]
    return (
        <>
            <div className='w-full overflow-y-auto no-scrollbar '>
                <div className='px-5 mb-5 border-b border-[#E5E6E6] flex items-center justify-start'>
                    {TicketTabs.map((tab, index) => (

                        <button key={index}
                            onClick={() => setActiveTab(tab.key)}
                            className={`cursor-pointer ms-4 px-3 py-2 flex items-center justify-center text-xs/4 font-medium ${activeTab === tab.key ? "text-[#087BB3]" : "text-[#63716E]"} `}>{tab.name}</button>
                    ))}
                </div>
                <div className='relative grid grid-cols-2 h-[calc(100vh-160px)]'>
                    <div className='w-full p-6 overflow-y-auto no-scrollbar '>
                        {activeTab === "details" ?
                            <div className="flex flex-col items-center justify-between w-full font-['DM_Sans'] ">
                                <div className='border-b border-[#E5E6E6] pb-3 mb-3 flex items-center justify-between w-full'>
                                    <p className='text-xs/4.5 font-medium text-[#272727] text-start'>Submitted By</p>
                                    <span className='block text-center px-3 py-2 bg-[rgba(52,179,241,0.05)] rounded-[32px] border border-[#E2E8F0] text-sm font-medium text-[#373940]'>{ticketDetails.submitBy}</span>
                                </div>
                                <div className='border-b border-[#E5E6E6] pb-3 mb-3 flex items-center justify-between w-full'>
                                    <p className='text-xs/4.5 font-medium text-[#272727] text-start'>Clinic</p>
                                    <span className='block text-center px-3 py-2 bg-[rgba(52,179,241,0.05)] rounded-[32px] border border-[#E2E8F0] text-sm font-medium text-[#373940] '>{ticketDetails.clinic}</span>
                                </div>
                                <div className='border-b border-[#E5E6E6] pb-3 mb-3 flex items-center justify-between w-full'>
                                    <p className='text-xs/4 font-medium text-[#272727 ] text-start'>Agent {agent === "Assign Agent" ? <span className='text-red-500 text-xs'>(Not Assigned)</span> : <span></span>}</p>
                                    <div className='relative'>
                                        <div
                                            onClick={() => setShowDropdown(!showDropdown)}
                                            className='cursor-pointer flex items-center justify-center gap-1  px-3 py-2 bg-[rgba(52,179,241,0.05)] rounded-[32px] border border-[#E2E8F0] text-sm font-medium text-[#373940]'>
                                            <span className=''>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    className="lucide lucide-plus w-4 h-4 text-[#373940] font-bold" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path>
                                                </svg>
                                            </span>
                                            <span className="text-sm/5 font-medium font-['Urbanist'] text-[#373940]">{agent}</span>
                                            <span class=" pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 10L12 15L17 10H7Z" fill="#6c757d"></path></svg>
                                            </span>
                                        </div>
                                        {showDropdown &&
                                            <div className='absolute max-h-48 min-w-40 overflow-y-auto top-full right-0 mt-1 bg-white border border-[#dee2e6] rounded-md shadow-lg z-10'>
                                                <div className='py-1'>
                                                    {["Assign Agent", "Erika BarcenaNicole", "LiTatjana", "Milankovic"].map((item, index) => (
                                                        <button key={index}
                                                            onClick={() => {
                                                                setAgent(item);
                                                                setShowDropdown(false)
                                                            }}
                                                            className='cursor-pointer px-3 py-2 w-full text-left text-sm text-[#495057] hover:bg-gray-50'>
                                                            {item}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='border-b border-[#E5E6E6] pb-3 mb-3 flex items-center justify-between w-full'>
                                    <p className='text-xs/4.5 font-medium text-[#272727] text-start'>Department</p>
                                    <div className='flex items-center gap-1 max-w-35  text-center px-3 py-2 bg-[rgba(52,179,241,0.05)] rounded-[32px] border border-[#E2E8F0] text-sm font-medium text-[#373940]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="lucide lucide-tag w-4 h-4 text-purple-600 font-bold" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                        </svg>
                                        <span>{ticketDetails.department}</span>
                                    </div>
                                </div>
                                <div className='border-b border-[#E5E6E6] pb-3 mb-3 flex items-center justify-between w-full'>
                                    <p className='text-xs/4.5 font-medium text-[#272727] text-start'>Category</p>
                                    <span className='block text-center px-3 py-2 bg-[rgba(52,179,241,0.05)] rounded-[32px] border border-[#E2E8F0] text-sm font-medium text-[#373940]'>Employee Onboarding</span>
                                </div>
                                <span className='block w-full bg-[#EEE] my-8 h-[1px]'></span>
                                <div className='flex flex-col items-start w-full '>
                                    <div className="px-4 flex items-center gap-4 justify-start mb-4 w-full">
                                        {["Ticket Information", "Attachments"].map((tab, index) => (
                                            <button key={index}
                                                onClick={() => setShowDescription(index)}
                                                className={`px-3 py-2 cursor-pointer text-xs font-medium font-['Urbanist'] ${showDescription === index ? "text-[#81BD41]" : "text-[#63716E]"}`}>{tab}</button>
                                        ))}
                                    </div>
                                    {showDescription == 0 ?
                                        <div className="font-['DM_Sans'] w-full">
                                            <p className="text-xs font-medium text-[#63716E]  text-start mb-1.5"> Short Note or Recommendation</p>
                                            <div className="px-3 py-2.25 rounded-xl bg-[#F7F7F7] min-h-25 w-full">
                                                <p className='text-xs text-[#203430]'> Description</p>
                                            </div>
                                        </div>
                                        :
                                        <div className="font-['DM_Sans'] w-full">
                                            <p className="text-xs font-medium text-[#63716E]  text-start mb-1.5"> Attachments </p>
                                            <div className="px-3 py-2.25 rounded-xl bg-[#F7F7F7] min-h-25 w-full">
                                                <p className='text-xs text-[#203430]'> Attachments</p>
                                            </div>
                                        </div>}
                                </div>


                            </div>

                            :
                            activeTab === "history" ?
                                <TicketHistoryTab />


                                :
                                <FeedbackTab />
                        }
                    </div>
                    <div className="sticky top-6 h-fit">
                        <ChatModel />
                    </div>
                </div>
            </div>

        </>
    )
}

export default TicketModel
