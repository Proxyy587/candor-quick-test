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
import { addReview } from "./actions";

export function AddReviewDialog() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [quote, setQuote] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await addReview({ name, title, quote });
		setOpen(false);
		setName("");
		setTitle("");
		setQuote("");
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="mb-4">Add Review</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New Review</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<Input
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<Textarea
						placeholder="Quote"
						value={quote}
						onChange={(e) => setQuote(e.target.value)}
						required
					/>
					<Button type="submit">Add Review</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
