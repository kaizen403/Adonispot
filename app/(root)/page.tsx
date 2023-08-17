import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Inter, Pacifico } from 'next/font/google'
import ThreadCard from "@/components/cards/ThreadCard";
import Pagination from "@/components/shared/Pagination";
import { Suspense } from 'react'
import { fetchPosts } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { Caveat, Lexend } from "next/font/google";
import Link from "next/link";
const caveat = Caveat({
  subsets: ['latin'],
  weight: "400"
})
const lexend = Lexend({subsets: ['latin']})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: "400"
})

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30
  );

  return (
    <>
      <h1 className={`head-text tracking-wider font-semibold text-left ${pacifico.className}`}>Home</h1>


      <section className='mt-5 flex flex-col gap-4'>
        {result.posts.length === 0 ? (
          <p className='no-result'>No threads found</p>
        ) : (
          <>
          <Suspense fallback={<p>Loading feed...</p>}>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </Suspense>
          </>
        )}
        <p className={`lg:hidden text-center text-body-semibold text-slate-500 ${caveat.className}`}>
    Copyright @ 2023 | made with ♡ by 
    <Link href='https://www.instagram.com/itz_kaizenn/' className={`text-sky-500 underline`}>
        @Rishivhavle
    </Link>
</p>
      </section>

      <Pagination
        path='/'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </>
  );
}

export default Home;
