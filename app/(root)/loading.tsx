import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";

export default function Loading() {
    return <div className="flex justify-center items-center">
        <LoadingSkeleton/>
    </div>;
}