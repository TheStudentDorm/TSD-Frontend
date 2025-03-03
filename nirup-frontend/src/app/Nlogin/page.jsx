"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NLoginButton } from "@/components/ui/NLoginButton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/NLoginForm";
import SignUpForm from "@/components/NSignUpForm";
import Image from "next/image";
import Link from 'next/link';

export default function LoginPage() {
  const [selectedForm, setSelectedForm] = useState("login");
  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div className="hidden md:flex w-1/2 bg-n2 justify-end items-center bg-[url('/art1.png')] bg-[auto_1050px] bg-center">
        <div className="text-right md: flex flex-col gap-4">
          <NLoginButton
            className={`w-full ${
              selectedForm === "login"
                ? "bg-primary text-white bg-n1"
                : "bg-secondary text-grey-700"
            } `}
            onClick={() => setSelectedForm("login")}
          >
            Login
          </NLoginButton>
          <NLoginButton
            className={`w-full ${
              selectedForm === "signup"
                ? "bg-primary text-white bg-n1"
                : "bg-secondary text-grey-700"
            }`}
            onClick={() => setSelectedForm("signup")}
          >
            Sign up
          </NLoginButton>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex bg-n3 justify-center items-center p-8">
        <div className="flex flex-col items-center w-full">
          <Link href="/" className="mb-10">
            <Image
              src="/logo-no-background.png"
              alt="Logo"
              width={300}
              height={100}
              className="cursor-pointer p-2"
            />
          </Link>
          
          {/* Mobile buttons - only visible on small screens */}
          <div className="flex gap-4 mb-8 md:hidden">
            <Button
              className={`${
                selectedForm === "login"
                  ? "bg-primary text-white bg-n1"
                  : "bg-secondary text-grey-700"
              } `}
              onClick={() => setSelectedForm("login")}
            >
              Login
            </Button>
            <Button
              className={`${
                selectedForm === "signup"
                  ? "bg-primary text-white bg-n1"
                  : "bg-secondary text-grey-700"
              }`}
              onClick={() => setSelectedForm("signup")}
            >
              Sign up
            </Button>
          </div>
          
          {/* Form */}
          {selectedForm === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
