import { SignIn } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
const lexend = Lexend({subsets: ['latin']})

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pt-10 items-center h-screen lg:h-auto">
        <div className="pt-5 pl-5 pr-5 pb-2 lg:w-1/2">
          <h1 className={`text-white tracking-wide font-extrabold ${lexend.className}`} style={{ fontSize: '50px' }}>Welcome to SigmaGram</h1>
          <p className={`mt-5 text-white tracking-normal lg:leading-loose ${lexend.className}`} style={{ fontSize:'20px'}}>Seeking a space dedicated to self-improvement and growth? Look no further! Connect with like-minded individuals who are on their journey to becoming the best versions of themselves. Engage in healthy competition, draw inspiration from those ahead of you, and let that motivation fuel your desire to surpass your limits. Elevate your potential in an environment where everyone strives for excellence. Let's grow together!</p>
        </div>
        <div className="pl-5 pr-5 pb-7 lg:w-1/2 flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </>
  );
}
