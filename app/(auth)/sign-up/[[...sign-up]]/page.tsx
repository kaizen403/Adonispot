import { SignUp } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
const lexend = Lexend({subsets: ['latin']})
export default function Page() {
  return <>
  <div className="flex flex-col justify-center items-center">
  <h1 className="text-white mt-6 tracking-wide font-semibold text-6xl" style={{ fontSize: '50px' }}>Sign Up</h1>

    <div className="lg:w-1/2 sm:mb-15 flex justify-center"><SignUp /></div>
  </div>
  </>
}