"use client"

import Link from 'next/link';
import Nav from '../components/ui/nav';
import { UserButton } from "@clerk/nextjs"
import { Next13ProgressBar } from 'next13-progressbar';



export default function Home() {

  return (
 
       
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <Nav />
      <UserButton afterSignOutUrl="/" />
      
      <Next13ProgressBar height="10px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />


      <h1 className="text-5xl font-bold mb-4">Job Board</h1>
      <p className="text-lg">
        Welcome to our Job Board! Find exciting opportunities and take the next
        step in your career Journey.
      </p>
      <Link href="/Test"> 
        <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Input Page
        </button>
      </Link>
    </main>
   
  
    
  );
}
