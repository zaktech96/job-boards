"use client";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useState } from 'react';

// export default function Visa() {
//   const [visaRequired, setVisaRequired] = useState(false);

//   const handleContainerClick = () => {
//     // Toggle the visaRequired state
//     setVisaRequired(!visaRequired);
//   };

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-24">
//       <h1 className="text-2xl font-bold mb-4">Do you require a visa to work in these locations?</h1>
//       <label className="focus:outline-none">
//         <div
//           onClick={handleContainerClick}
//           className={`bg-white p-6 rounded-lg flex items-center justify-center space-x-4 cursor-pointer ${visaRequired ? 'border border-blue-500' : ''}`}
//         >
//           <Checkbox checked={visaRequired} onChange={handleContainerClick} />
//           <span className="text-lg font-semibold">I require a visa</span>
//         </div>
//       </label>
//     </main>
//   );
// }
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from 'react';
import Link from 'next/link';

export default function Visa() {
  const [visaRequired1, setVisaRequired1] = useState(false);
  const [visaRequired2, setVisaRequired2] = useState(false);

  const handleContainerClick1 = () => {
    // Toggle the visaRequired1 state
    setVisaRequired1(!visaRequired1);
  };

  const handleContainerClick2 = () => {
    // Toggle the visaRequired2 state
    setVisaRequired2(!visaRequired2);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Do you require a visa to work in these locations?</h1>
      <div onClick={handleContainerClick1} className={`bg-white p-6 rounded-lg flex items-center justify-center space-x-4 cursor-pointer ${visaRequired1 ? 'border border-blue-500' : ''}`}>
        <Checkbox checked={visaRequired1} onChange={handleContainerClick1} />
        <span className="text-lg font-semibold">I require a visa</span>
      </div>
      <div onClick={handleContainerClick2} className={`bg-white p-6 rounded-lg flex items-center justify-center space-x-4 cursor-pointer ${visaRequired2 ? 'border border-blue-500' : ''}`}>
        <Checkbox checked={visaRequired2} onChange={handleContainerClick2} />
        <span className="text-lg font-semibold">No require a visa</span>
      </div>
  <Link href="/Start"> 
   <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Input Page
        </button>
      </Link>
    </main>
  );
}



