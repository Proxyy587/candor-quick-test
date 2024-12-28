import { Project } from "@/lib/models/project.model";
import { deleteProject } from "./actions";
import { Button } from "@/components/ui/button";

export function ProjectList({ projects }: { projects: any[] }) {
	return (
		<ul className="space-y-4">
			{projects.map((project) => (
				<li key={project._id?.toString()} className="border p-4 rounded-md">
					<h3 className="font-semibold">{project.title}</h3>
					<p className="text-sm text-gray-500">{project.dates}</p>
					<p className="mt-2">{project.description}</p>
					<div className="mt-2">
						<strong>Technologies:</strong> {project.technologies.join(", ")}
					</div>
					<Button
						variant="destructive"
						size="sm"
						className="mt-2"
						onClick={() => deleteProject(project._id!.toString())}
					>
						Delete
					</Button>
				</li>
			))}
		</ul>
	);
}
