import { useRouter } from 'next/router';

export default function Results() {
  const router = useRouter();
  const { result } = router.query; // Retrieve the result from the query params

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      <BackButton />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center font-recoleta text-8xl z-10 mb-2">
          <span>{result || 'Loading...'}</span> {/* Display the result or a loading text */}
        </div>
        <div className="text-center font-recoleta text-2xl mb-6">
          This is the type of sleeper you are!
        </div>
      </div>
    </main>
  );
}
