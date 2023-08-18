import { SignIn } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
const lexend = Lexend({subsets: ['latin']})

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pt-10 items-center h-screen lg:h-auto">
        <div className="pt-5 pl-5 pr-5 pb-2 lg:w-1/2">
          <h1 className={`text-white tracking-wide font-extrabold ${lexend.className}`} style={{ fontSize: '50px' }}>Welcome to SigmaGram</h1>
          <p className={`mt-5 text-white tracking-normal lg:leading-loose ${lexend.className}`} style={{ fontSize:'20px'}}>Threads For Sigmas</p>
        </div>
        <div className="pl-5 pr-5 pb-7 lg:w-1/2 flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </>
  );
}
