// 'use client'
// // Import necessary dependencies
// import { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Next13ProgressBar } from 'next13-progressbar';


// // Create the functional component
// // add submit succession 
// export default function Inputs() {
//   // Define state variables
//   const [inputValue, setInputValue] = useState<string>('');
//   const [error, setError] = useState<string>('');

//   // Define event handlers
//   const handleInputChange = (value: string) => {
//     setInputValue(value);
//     setError('');
//   };

//   const handleSubmit = () => {
//     if (!inputValue.trim()) {
//       setError('Input must contain at least 1 character.');
//     } else {
//       // Process the form submission logic here
//       console.log("Form submitted with input:", inputValue);
//       // Navigate to the specified link
//       window.location.href = "/Section";
//     }
//   };

//   // Return the JSX markup
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-10">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold mb-6">Input Form</h1>

//         {/* Input component */}
//          <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />
//         <Input
//           onChange={(e) => handleInputChange(e.target.value)}
//         />

//         {/* Error message */}
//         {error && (
//           <p className="text-red-500 text-sm mt-2">{error}</p>
//         )}

//         {/* Submit button with additional styling */}

//         <button
//           onClick={handleSubmit}
//           className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
//         >
//           Go to Input Page
//         </button>
        
          
//             {/* </Link> */}
//       </div>
//     </main>
//   );
// }
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

      <div className="mt-4">
        <p>Select the top three aspects that are most important to you in a new role:</p>
        
        {/* Render each word as a separate clickable element */}
        <div>
        <button
          className={`cursor-pointer ${selectedReasons.includes('Alignment') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('Alignment')}
        >
          Alignment
        </button>
        <button
          className={`cursor-pointer ml-2 ${selectedReasons.includes('Challenge') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('Challenge')}
        >
          Challenge
        </button>
        <button
          className={`cursor-pointer ml-2 ${selectedReasons.includes('Impact') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('Impact')}
        >
          Impact
        </button>
</div>
<div>
           <button
          className={`cursor-pointer ml-2 ${selectedReasons.includes('Diverstiy and inclusion') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('Diverstiy and inclusion')}
        >
         Diverstiy and inclusion
        </button>

            <button
          className={`cursor-pointer ml-2 ${selectedReasons.includes('Development and progress') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('Development and progress')}
        >
       Development and progress
        </button>

           <button
          className={`cursor-pointer ml-2 ${selectedReasons.includes('recognition and reward') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('recognition and reward')}
        >
       recognition and reward
        </button>
</div>
   <button
          className={`cursor-pointer ml-2 ${selectedReasons.includes('Great Team work') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleReasonSelection('Great Team work')}
        >
      Great Team work
        </button>

      
        
        {/* Add more buttons for additional reasons */}
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

