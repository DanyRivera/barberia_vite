import { animateScroll as scroll } from "react-scroll"

const Up = () => {
    return (
        <button 
            className="fixed bottom-10 right-1 md:right-5 p-3 rounded-full bg-gray-300 shadow-2xl border cursor-pointer"
            onClick={() => scroll.scrollToTop()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    )
}

export default Up