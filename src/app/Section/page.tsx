import Link from 'next/link';
export default function Section() {
    return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <h1 className="text-5xl font-bold mb-4">Location section </h1>
        
             <Link href="/Dashboard"> 
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Input Page
        </button>
      </Link>
    </main>
  );
}