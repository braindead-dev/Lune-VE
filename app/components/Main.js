// components/Main.js

export default function Main({ children }) {
    return (
      <main className="flex min-h-screen flex-col justify-between items-center p-24 text-dark-purple">
        {children}
      </main>
    );
  }
  