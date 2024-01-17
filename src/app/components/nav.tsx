import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 border-b backdrop-blur-2xl">
      <div className="mx-auto flex items-center justify-between font-mono text-sm lg:flex lg:items-end lg:p-4 lg:rounded-xl lg:border">
        <p className="w-full lg:w-auto lg:border-b-0 lg:p-0 lg:bg-none">
  Job Board 
          <code className="font-mono font-bold"></code>
        </p>
        
 
        <div className="ml-4">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>

      
        <ul className="flex space-x-10">
          <li>
        {/* Add route path to link back to home */}
            <a href="#" className="hover:underline">Home</a>
          </li>
          <li>
                    {/* Add route path to link to input page */}
            <a href="#" className="hover:underline">Input</a>
          </li>
          <li>
                    {/* Add route path to link back to home */}
            <a href="#" className="hover:underline">Services</a>
          </li>
 
        </ul>
      </div>

      <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Additional content or Vercel attribution can be added here */}
        </a>
      </div>
    </nav>
  );
}
