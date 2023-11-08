export default function ProgressBar ({ percentage }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
          <div className="bg-dark-purple h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}