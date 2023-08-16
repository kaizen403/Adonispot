import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import { Caveat, Lexend } from "next/font/google";
import Link from "next/link";
const caveat = Caveat({
  subsets: ['latin'],
  weight: "400"
})
const lexend = Lexend({subsets: ['latin']})

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/assets/favicon.ico' alt='logo' width={35} height={35} />
        <p className={`text-heading3-bold tracking-wide text-light-1 {lexend.className}`}>SigmaGram</p>
      </Link>
      

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
