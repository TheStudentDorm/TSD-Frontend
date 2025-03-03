"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-sm bg-n4">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Sign in with your GitHub account</CardDescription>
      </CardHeader>
      <CardFooter>
        <form className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
          <hr className="my-4" />
          <CardDescription>Or sign in with</CardDescription>
          <Button className="w-auto bg-n1">
            <FcGoogle className="mr-2" />Google
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
