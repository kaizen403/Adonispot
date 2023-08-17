import { currentUser } from "@clerk/nextjs";

import UserCard from "../cards/UserCard";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUsers } from "@/lib/actions/user.actions";
import { Caveat, Lexend } from "next/font/google";
import Link from "next/link";
const caveat = Caveat({
  subsets: ['latin'],
  weight: "400"
})
const lexend = Lexend({subsets: ['latin']})

async function RightSidebar() {
  const user = await currentUser();
  if (!user) return null;

  const similarMinds = await fetchUsers({
    userId: user.id,
    pageSize: 7,
  });

  const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });

  return (
    <section className='custom-scrollbar rightsidebar'>
        

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Similar Minds⭐</h3>
        <div className='mt-7 flex w-[350px] flex-col gap-10'>
          {similarMinds.users.length > 0 ? (
            <>
              {similarMinds.users.map((person:any) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType='User'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>No users yet</p>
          )}
        </div>
      </div>
      <p className={`text-center text-body-semibold text-slate-500 ${lexend.className}`} style={{ fontSize: '13px' }}>Copyright @ 2023 | made with ♡ by <Link href='https://www.instagram.com/itz_kaizenn/' className={`text-sky-500 underline`}>@Rishivhavle</Link></p>
    </section>
  );
}

export default RightSidebar;