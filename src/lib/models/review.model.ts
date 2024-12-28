import mongoose from "mongoose";
import { connectToDatabase } from "../db";

const ReviewSchema = new mongoose.Schema({
	quote: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

export const Review =
	mongoose.models.Review || mongoose.model("Review", ReviewSchema);

export async function getReviews() {
	const db = await connectToDatabase();
	return Review.find();
}
