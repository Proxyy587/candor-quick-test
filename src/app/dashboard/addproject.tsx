"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { addProject } from "./actions";

export function AddProjectDialog() {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [href, setHref] = useState("");
	const [dates, setDates] = useState("");
	const [description, setDescription] = useState("");
	const [technologies, setTechnologies] = useState<string[]>([]);
	const [newTechnology, setNewTechnology] = useState("");
	const [image, setImage] = useState("");

	const handleAddTechnology = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" || e.key === ",") {
			e.preventDefault();
			if (
				newTechnology.trim() &&
				!technologies.includes(newTechnology.trim())
			) {
				setTechnologies([...technologies, newTechnology.trim()]);
				setNewTechnology("");
			}
		}
	};

	const handleRemoveTechnology = (tech: string) => {
		setTechnologies(technologies.filter((t) => t !== tech));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await addProject({ title, href, dates, description, technologies, image });
		setOpen(false);
		setTitle("");
		setHref("");
		setDates("");
		setDescription("");
		setTechnologies([]);
		setImage("");
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="mb-4">Add Project</Button>
			</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>Add New Project</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<Input
						placeholder="URL"
						value={href}
						onChange={(e) => setHref(e.target.value)}
						required
					/>
					<Input
						placeholder="Dates (e.g., Jan 2023 - Feb 2023)"
						value={dates}
						onChange={(e) => setDates(e.target.value)}
						required
					/>
					<Textarea
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
					<div>
						<Input
							placeholder="Add technologies (press Enter or comma to add)"
							value={newTechnology}
							onChange={(e) => setNewTechnology(e.target.value)}
							onKeyDown={handleAddTechnology}
						/>
						<div className="flex flex-wrap gap-2 mt-2">
							{technologies.map((tech) => (
								<Badge
									key={tech}
									variant="secondary"
									className="flex items-center gap-1"
								>
									{tech}
									<X
										className="h-3 w-3 cursor-pointer"
										onClick={() => handleRemoveTechnology(tech)}
									/>
								</Badge>
							))}
						</div>
					</div>
					<Input
						placeholder="Image URL"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
					<Button type="submit">Add Project</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
