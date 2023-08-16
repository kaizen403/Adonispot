import { SignIn } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
const lexend = Lexend({subsets: ['latin']})
export default function Page() {
  return <>
  <div className="lg:flex justify-between">
    <div className="ml-10 lg:w-1/2">
      <h1 className={`text-white tracking-wide font-extrabold ${lexend.className}`} style={{ fontSize: '50px' }}>Welcome to SigmaGram</h1>
      <p className={`mt-10 text-white tracking-wide leading-loose ${lexend.className}`} style={{ fontSize:'20px'}}>Seeking a space dedicated to self-improvement and growth? Look no further! Connect with like-minded individuals who are on their journey to becoming the best versions of themselves. Engage in healthy competition, draw inspiration from those ahead of you, and let that motivation fuel your desire to surpass your limits. Elevate your potential in an environment where everyone strives for excellence. Let's grow together!</p>
      
      </div>
    <div className="lg:w-1/2 flex justify-center"><SignIn /></div>
  </div>
  
  </>;
}