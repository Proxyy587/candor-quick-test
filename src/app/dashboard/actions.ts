"use server";

import { Review } from "@/lib/models/review.model";
import { Project} from "@/lib/models/project.model";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/db";

export async function addReview(data: {
	name: string;
	title: string;
	quote: string;
}) {
	await connectToDatabase();
	const review = new Review(data);
	await review.save();
	revalidatePath("/dashboard");
}

export async function deleteReview(id: string) {
	await connectToDatabase();
	await Review.findByIdAndDelete(id);
	revalidatePath("/dashboard");
}

export async function addProject(data: {
	title: string;
	href: string;
	dates: string;
	description: string;
	technologies: string[];
	image: string;
}) {
	await connectToDatabase();
	const project = new Project(data);
	await project.save();
	revalidatePath("/dashboard");
}

export async function deleteProject(id: string) {
	await connectToDatabase();
	await Project.findByIdAndDelete(id);
	revalidatePath("/dashboard");
}


