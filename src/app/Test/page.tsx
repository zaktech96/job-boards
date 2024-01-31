'use client'
// Import necessary dependencies
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Next13ProgressBar } from 'next13-progressbar';


// Create the functional component
// add submit succession 
export default function Inputs() {
  // Define state variables
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Define event handlers
  const handleInputChange = (value: string) => {
    setInputValue(value);
    setError('');
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setError('Input must contain at least 1 character.');
    } else {
      // Process the form submission logic here
      console.log("Form submitted with input:", inputValue);
      // Navigate to the specified link
      window.location.href = "/Section";
    }
  };

  // Return the JSX markup
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Input Form</h1>

        {/* Input component */}
         <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />
        <Input
          onChange={(e) => handleInputChange(e.target.value)}
        />

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        {/* Submit button with additional styling */}

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go to Input Page
        </button>
        
          
            {/* </Link> */}
      </div>
    </main>
  );
}
