import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { DATA, testimonails } from "@/data/resume";
import { getProjects, Project } from "@/lib/models/project.model";
import { getReviews, Review } from "@/lib/models/review.model";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
	const reviews = await getReviews();
	const projects = await getProjects();

	return (
		<main className="flex flex-col min-h-[100dvh] space-y-6">
			<section id="hero">
				<div className="mx-auto w-full max-w-xl space-y-4">
					<div className="flex justify-between gap-2">
						<div className="flex flex-col flex-1 space-y-1">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-semibold tracking-tight sm:text-3xl xl:text-3xl"
								yOffset={8}
								text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
							/>
							<BlurFadeText
								className="max-w-[600px] text-base"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className="text-2xl font-semibold">About</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
						{DATA.summary}
					</Markdown>
				</BlurFade>
			</section>
			<section id="projects">
				<div className="space-y-6 w-full py-6">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-start justify-start space-y-3 text-left">
							<div className="space-y-1">
								<div className="inline-block rounded-lg bg-foreground text-background px-2 py-1 text-sm">
									My Projects
								</div>
								<h2 className="text-3xl font-semibold tracking-tight sm:text-3xl">
									Check out my latest work
								</h2>
								<p className="text-muted-foreground text-base">
									I&apos;ve worked on a variety of projects, from simple
									websites to complex web applications. Here are a few of my
									favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 max-w-[800px] mx-auto">
						{projects.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="testimonials">
				<div className="space-y-6 w-full py-6">
					<BlurFade delay={BLUR_FADE_DELAY * 14}>
						<div className="flex flex-col items-start justify-start space-y-3 text-left">
							<div className="space-y-1">
								<div className="inline-block rounded-lg bg-foreground text-background px-2 py-1 text-sm">
									Testimonials
								</div>
								<h2 className="text-3xl font-semibold tracking-tight sm:text-3xl">
									What my clients say
								</h2>
								<p className="text-muted-foreground text-base">
									Here are some testimonials from my clients.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="w-full flex flex-col items-start gap-2 mx-auto">
						<InfiniteMovingCards
							items={reviews}
							direction="right"
							speed="normal"
						/>
						<InfiniteMovingCards
							items={reviews}
							direction="left"
							speed="normal"
						/>
					</div>
				</div>
			</section>
			<section id="contact">
				<div className="grid items-start justify-start gap-3 px-4 text-left md:px-6 w-full py-6">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-foreground text-background px-2 py-1 text-sm">
								Contact
							</div>
							<h2 className="text-3xl font-semibold tracking-tight sm:text-3xl">
								Get in Touch
							</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground text-base">
								Want to chat? Just shoot me a dm{" "}
								<Link
									href={`https://x.com/proxyxd_s`}
									className="text-blue-500 hover:underline"
								>
									in twitter
								</Link>{" "}
								and I&apos;ll respond whenever I can. I will ignore all
								soliciting.
							</p>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	);
}
