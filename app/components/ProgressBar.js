export default function ProgressBar({ percentage }) {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
        <div
          className="bg-dark-purple h-2.5 rounded-full transition-width duration-500 ease-in-out"
          style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
        ></div>
      </div>
    );
  }
  