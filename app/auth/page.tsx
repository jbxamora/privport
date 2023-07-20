import { Metadata } from "next";
import Link from "next/link";

import { cn } from "../../util";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./components/authform";

export const metadata: Metadata = {
  title: "Authentication",
  description: "",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="container p-8 mx-auto flex flex-col items-center space-y-6 sm:w-[350px]">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >
            Login
          </Link>

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
