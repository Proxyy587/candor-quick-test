"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";

export default function SignInPage() {
	return (
		<div className="grid w-full grow items-center px-4 sm:justify-center">
			<SignIn.Root>
				<Clerk.Loading>
					{(isGlobalLoading) => (
						<SignIn.Step name="start">
							<Card className="w-full sm:w-96">
								<CardHeader>
									<CardTitle>LOGIN FAST</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-y-4">
									<div className="grid grid-cols-1 gap-x-4">
										<Clerk.Connection name="google" asChild>
											<Button
												size="sm"
												variant="outline"
												type="button"
												disabled={isGlobalLoading}
											>
												<Clerk.Loading scope="provider:google">
													{(isLoading) =>
														isLoading ? (
															<Icons.spinner className="size-4 animate-spin" />
														) : (
															<>Login w Google</>
														)
													}
												</Clerk.Loading>
											</Button>
										</Clerk.Connection>
									</div>
								</CardContent>
							</Card>
						</SignIn.Step>
					)}
				</Clerk.Loading>
			</SignIn.Root>
		</div>
	);
}
