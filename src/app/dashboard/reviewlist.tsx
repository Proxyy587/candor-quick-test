import { Review } from "@/lib/models/review.model";
import { deleteReview } from "./actions";
import { Button } from "@/components/ui/button";

export function ReviewList({ reviews }: { reviews: any[] }) {
	return (
		<ul className="space-y-4">
			{reviews.map((review) => (
				<li key={review._id?.toString()} className="border p-4 rounded-md">
					<p className="font-semibold">{review.name}</p>
					<p className="text-sm text-gray-500">{review.title}</p>
					<p className="mt-2">{review.quote}</p>
					<Button
						variant="destructive"
						size="sm"
						className="mt-2"
						onClick={() => deleteReview(review._id!.toString())}
					>
						Delete
					</Button>
				</li>
			))}
		</ul>
	);
}
