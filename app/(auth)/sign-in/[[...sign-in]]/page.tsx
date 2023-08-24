import { SignIn } from "@clerk/nextjs";
import { Caveat, Lexend } from "next/font/google";
import Link from "next/link";
const caveat = Caveat({
  subsets: ['latin'],
  weight: "400"
})
const lexend = Lexend({subsets: ['latin']})

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pt-10 items-center h-screen lg:h-auto">
        <div className="pt-5 pl-5 pr-5 pb-2 lg:w-1/2">
          <h1 className={`text-white tracking-wide font-extrabold ${lexend.className}`} style={{ fontSize: '50px' }}>Welcome to SigmaGram</h1>
          <p className={`mt-5 text-white tracking-normal lg:leading-loose ${lexend.className}`} style={{ fontSize:'20px'}}>My project SigmaGram provides a unique platform tailored for the introspective leaders, allowing them to engage in meaningful connections, content, and personal growth. It's a social platform not for the masses, but for depth-seekers.</p>
        </div>
        <div className="pl-5 pr-5 pb-7 lg:w-1/2 flex justify-center items-center">
          <SignIn />
        </div>
        
      </div>
      <p className={`text-center mt-10text-body-semibold text-slate-500 ${lexend.className}`} style={{ fontSize: '13px' }}>Copyright @ 2023 | made with ♡ by <Link href='https://www.instagram.com/itz_kaizenn/' className={`text-sky-500 underline`}>@Rishivhavle</Link></p>
    </>
  );
}
