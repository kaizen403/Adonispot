import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";

export default function Loading() {
    return <div className="flex justify-center items-center">
        <LoadingSkeleton/>
        <h1 className="text-white text-2xl">Loading...</h1>
    </div>;
}