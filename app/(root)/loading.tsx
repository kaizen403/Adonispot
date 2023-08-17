import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";

export default function Loading() {
    return <div className="flex justify-center items-center">
        <LoadingSkeleton/>
        <div>
        <h1 className="text-white mt-6 tracking-wide font-semibold text-2xl">Loading...</h1>
        </div>
    </div>;
}