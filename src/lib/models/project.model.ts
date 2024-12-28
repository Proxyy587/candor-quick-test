import mongoose from "mongoose";
import { connectToDatabase } from "../db";

const ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	href: {
		type: String,
		required: true,
	},
	dates: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: true,
	},
	description: {
		type: String,
		required: true,
	},
	technologies: [
		{
			type: String,
		},
	],
	links: [
		{
			type: {
				type: String,
				required: true,
			},
			href: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		},
	],
	image: {
		type: String,
	},
});

export const Project =
	mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export async function getProjects() {
	await connectToDatabase();
	return Project.find();
}
