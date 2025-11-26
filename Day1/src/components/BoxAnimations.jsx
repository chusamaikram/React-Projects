import { motion } from "motion/react"

function BoxAnimations() {
    return (
        <>
            <div className='flex items-center justify-center gap-25 my-6 px-4 text-white font-bold'>
                <motion.div
                    drag="x"
                    className='w-32 h-32 bg-red-400 m-4 rounded-lg flex items-center justify-center'
                >
                    Drag me
                </motion.div>

                <motion.div
                    drag="y"
                    className='w-32 h-32 bg-blue-500 m-4 rounded-lg flex items-center justify-center'
                >
                    Drag me
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                    className='w-32 h-32 bg-green-500 m-4 rounded-lg flex items-center justify-center'
                >
                    Drag me
                </motion.div>
                <motion.div
                    drag
                    className='w-32 h-32 bg-gray-800 m-4 rounded-lg flex items-center justify-center'
                >
                    Drag me
                </motion.div>
            </div>
        </>
    )
}

export default BoxAnimations
