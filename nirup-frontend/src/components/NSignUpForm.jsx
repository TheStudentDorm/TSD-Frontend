'use client';

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { FcGoogle } from 'react-icons/fc';

export default function SignUpForm() {
  return (
    <Card className="w-full max-w-sm bg-n4">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Create a new account
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <form  className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-n1">Create Account</Button>
          <hr className="my-4" />
          <CardDescription>Or sign up with</CardDescription>
          <Button className="w-auto bg-n1">
            <FcGoogle className="mr-2" />Google
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}