
'use client'
import React, { useState } from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

export default function Inputs() {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const handleReasonSelection = (reason: string) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter(item => item !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleSubmit = () => {
    console.log("Selected reasons:", selectedReasons);
    window.location.href = "/Section";
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-6">Select Important Aspects</h1>

      <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />
     

        
<div className="flex justify-center">
  <div className="grid grid-cols-2 gap-4">
    <button
      className={`cursor-pointer ${selectedReasons.includes('Alignment') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Alignment')}
    >
      Alignment
    </button>
    <button
      className={`cursor-pointer ${selectedReasons.includes('Challenge') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Challenge')}
    >
      Challenge
    </button>
    <button
      className={`cursor-pointer ${selectedReasons.includes('Impact') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Impact')}
    >
      Impact
    </button>
    <button
      className={`cursor-pointer ${selectedReasons.includes('Diverstiy and inclusion') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Diverstiy and inclusion')}
    >
      Diversity and Inclusion
    </button>
    <button
      className={`cursor-pointer ${selectedReasons.includes('Development and progress') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Development and progress')}
    >
      Development and Progress
    </button>
    <button
      className={`cursor-pointer ${selectedReasons.includes('recognition and reward') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('recognition and reward')}
    >
      Recognition and Reward
    </button>
    <button
      className={`cursor-pointer ${selectedReasons.includes('Great Team work') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Great Team work')}
    >
      Great Team Work
          </button>
          
           <button
      className={`cursor-pointer ${selectedReasons.includes('Great Team work') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} py-2 px-4 rounded border border-gray-300`}
      onClick={() => handleReasonSelection('Great Team work')}
    >
      Great Team Work
    </button>
  </div>
</div>

<button
  onClick={handleSubmit}
  className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
  disabled={selectedReasons.length !== 3} // Disable button until exactly three reasons are selected
>
  Go to Input Page
</button>

    </main>
  );
}

