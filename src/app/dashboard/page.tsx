import { getProjects, Project } from "@/lib/models/project.model";
import { getReviews, Review } from "@/lib/models/review.model";
import React from "react";
import AdminDashboard from "./dashbord";

const Dashboard = async () => {
	const reviews = await getReviews();
	const projects = await getProjects();
	return (
		<div>
			<AdminDashboard reviews={reviews} projects={projects} />
		</div>
	);
};

export default Dashboard;
