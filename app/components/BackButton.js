function BackButton() {
    return (
        <div className="absolute top-8 left-10 z-10">
            <a href="javascript:history.back()" rel="noopener noreferrer">
                <button
                    className="rounded-full border border-gray-300 p-3 flex items-center justify-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 font-semibold lg:mt-0 lg:ml-0 lg:static lg:rounded-full lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                    style={{ width: '45px', height: '45px' }}
                >
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        {"<"}-
                    </span>
                </button>
            </a>
        </div>
    );
}

export default BackButton;
