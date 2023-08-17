import { SignUp } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
const lexend = Lexend({subsets: ['latin']})
export default function Page() {
  return <>
  <div className="flex justify-center items-center">

    <div className="lg:w-1/2 sm:mb-15 flex justify-center"><SignUp /></div>
  </div>
  </>
}