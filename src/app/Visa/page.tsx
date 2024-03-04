'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from 'react';
import Link from 'next/link';

export default function Visa() {
  const [visaRequired1, setVisaRequired1] = useState(false);
  const [visaRequired2, setVisaRequired2] = useState(false);

  const handleContainerClick1 = () => {
    setVisaRequired1(!visaRequired1);
  };

  const handleContainerClick2 = () => {
    setVisaRequired2(!visaRequired2);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Do you require a visa to work in these locations?</h1>
      <div onClick={handleContainerClick1} className={`bg-white p-6 rounded-lg shadow-md flex items-center justify-center space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${visaRequired1 ? 'border-2 border-blue-500 shadow-lg' : 'hover:shadow-lg'}`} style={{ width: '100%', maxWidth: '400px' }}>
        <Checkbox checked={visaRequired1} onChange={handleContainerClick1} aria-label="I require a visa" />
        <span className="text-lg font-semibold">I require a visa</span>
      </div>
      <div onClick={handleContainerClick2} className={`bg-white p-6 rounded-lg shadow-md flex items-center justify-center space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${visaRequired2 ? 'border-2 border-blue-500 shadow-lg' : 'hover:shadow-lg'}`} style={{ width: '100%', maxWidth: '400px' }}>
        <Checkbox checked={visaRequired2} onChange={handleContainerClick2} aria-label="No visa required" />
        <span className="text-lg font-semibold">No require a visa</span>
      </div>
      <Link href="/Start"> 
        <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Go to Input Page
        </button>
      </Link>
    </main>
  );
}
