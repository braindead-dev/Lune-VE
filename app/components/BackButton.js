import { FiArrowLeft } from 'react-icons/fi';

function BackButton() {
    return (
        <div className="absolute top-8 left-10 z-10">
            <a className="block" href="javascript:history.back()" rel="noopener noreferrer">
                <button
                    className="rounded-full border border-gray-300 p-3 flex items-center justify-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl font-semibold mt-0 ml-0 static rounded-full bg-gray-200"
                    style={{ width: '45px', height: '45px' }}
                >
                    <FiArrowLeft />
                </button>
            </a>
        </div>
    );
}

export default BackButton;
