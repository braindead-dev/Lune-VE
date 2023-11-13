export default function Main({ children }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple overflow-hidden">
        {children}
      </main>
    );
  }
  