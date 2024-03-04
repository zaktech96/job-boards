'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Start() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const handleButtonClick1 = () => {
    setSelected1(!selected1);
  };

  const handleButtonClick2 = () => {
    setSelected2(!selected2);
  };

  const handleButtonClick3 = () => {
    setSelected3(!selected3);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-5xl font-bold mb-4">When do you anticipate commencing your new job</h1>
      
      <div className="flex flex-col gap-4">
        <button
          className={`py-2 px-4 rounded focus:outline-none transition-colors duration-300 ${selected1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
          onClick={handleButtonClick1}
        >
          Selectable Button 1
        </button>

        <button
          className={`py-2 px-4 rounded focus:outline-none transition-colors duration-300 ${selected2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
          onClick={handleButtonClick2}
        >
          Selectable Button 2
        </button>

        <button
          className={`py-2 px-4 rounded focus:outline-none transition-colors duration-300 ${selected3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
          onClick={handleButtonClick3}
        >
          Selectable Button 3
        </button>
          </div>
          
            <Link href="/DropDown"> 
        <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Select page 
        </button>
      </Link>
    </main>
  );
}




