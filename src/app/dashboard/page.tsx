import { Project } from "@/lib/models/project.model";
import { Review } from "@/lib/models/review.model";
import React from "react";
import AdminDashboard from "./dashbord";

const Dashboard = async () => {
	const reviews = await Review.find();
	const projects = await Project.find();
	return (
		<div>
			<AdminDashboard reviews={reviews} projects={projects} />
		</div>
	);
};

export default Dashboard;