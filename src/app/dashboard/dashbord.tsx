"use client";

import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddReviewDialog } from "./addreview";
import { ReviewList } from "./reviewlist";
import { AddProjectDialog } from "./addproject";
import { ProjectList } from "./projectlist";

interface AdminDashboardProps {
	reviews: any[];
	projects: any[];
}

export default function AdminDashboard({
	reviews,
	projects,
}: AdminDashboardProps) {
	return (
		<div className="mx-auto p-6 space-y-8">
			<h1 className="text-4xl font-bold mb-8 text-center text-primary">
				Admin Dashboard
			</h1>
			<div className="flex flex-col space-y-8">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-2xl font-bold">Reviews</CardTitle>
						<AddReviewDialog />
					</CardHeader>
					<CardContent>
						{reviews && reviews.length > 0 ? (
							<Suspense
								fallback={
									<div className="text-muted-foreground">
										Loading reviews...
									</div>
								}
							>
								<ReviewList reviews={reviews} />
							</Suspense>
						) : (
							<div className="text-muted-foreground">Looking around</div>
						)}
					</CardContent>
				</Card>
				<Card className="bg-card">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-2xl font-bold">Projects</CardTitle>
						<AddProjectDialog />
					</CardHeader>
					<CardContent>
						{projects && projects.length > 0 ? (
							<Suspense
								fallback={
									<div className="text-muted-foreground">
										Loading projects...
									</div>
								}
							>
								<ProjectList projects={projects} />
							</Suspense>
						) : (
							<div className="text-muted-foreground">Lookin around</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
