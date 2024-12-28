import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Abhijit Bhattacharjee",
	initials: "AB",
	url: "https://abhijee.com",
	location: "India",
	locationLink: "https://www.google.com/maps/place/India",
	description: "Developer, Student from India.",
	summary:
		"I'm currently pursuing a degree in computer science. I love participating in hackathons and building projects that solve real-world problems. I'm always eager to learn new technologies and improve my skills.",
	avatarUrl: "/avatar.png",

	work: [
		{
			company: "Tech Solutions",
			href: "https://techsolutions.com",
			badges: [],
			location: "Remote",
			title: "Software Engineer Intern",
			logoUrl: "/techsolutions.png",
			start: "May 2022",
			end: "Aug 2022",
			description:
				"Worked on developing and maintaining web applications using React and Node.js. Collaborated with the design team to create user-friendly interfaces.",
		},
		{
			company: "Innovate Labs",
			badges: [],
			href: "https://innovatelabs.com",
			location: "Remote",
			title: "Frontend Developer Intern",
			logoUrl: "/innovatelabs.png",
			start: "Jan 2022",
			end: "Apr 2022",
			description:
				"Implemented responsive web designs and optimized performance for various web applications. Worked closely with backend developers to integrate APIs.",
		},
	],
	education: [
		{
			school: "National Institute of Technology",
			href: "https://nit.edu",
			degree: "Bachelor's Degree in Computer Science",
			logoUrl: "/nit.png",
			start: "2021",
			end: "2025",
		},
		{
			school: "ABC High School",
			href: "https://abchighschool.edu",
			degree: "High School Diploma",
			logoUrl: "/abchighschool.png",
			start: "2019",
			end: "2021",
		},
	],
	projects: [
		{
			title: "Portfolio Website",
			href: "https://abhijit.dev",
			dates: "Jan 2023 - Feb 2023",
			active: true,
			description:
				"Developed a personal portfolio website to showcase my projects and skills. Built using Next.js, Typescript, and TailwindCSS.",
			technologies: ["Next.js", "Typescript", "TailwindCSS"],
			links: [
				{
					type: "Website",
					href: "https://abhijit.dev",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
		{
			title: "Chess App",
			href: "https://chessapp.com",
			dates: "June 2022 - Present",
			active: true,
			description:
				"Developed a chess application that allows users to play chess online with friends. Implemented using React, Node.js, and Socket.io.",
			technologies: ["React", "Node.js", "Socket.io"],
			links: [
				{
					type: "Website",
					href: "https://chessapp.com",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/abhijit/chessapp",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
	],
	
} as const;

export const testimonails = [
	{
		quote:
			"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote:
			"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
		name: "William Shakespeare",
		title: "Hamlet",
	},
	{
		quote: "All that we see or seem is but a dream within a dream.",
		name: "Edgar Allan Poe",
		title: "A Dream Within a Dream",
	},
	{
		quote:
			"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
		name: "Jane Austen",
		title: "Pride and Prejudice",
	},
	{
		quote:
			"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
];
