import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signup } from "@/lib/auth-actions";
import SigninWithGoogleButton from "./signin-with-google-button";
import { Separator } from "../ui/separator";
import { Tickets } from "lucide-react";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props} className="w-full px-0 md:px-4">
      <CardHeader>
        <CardTitle className="text-center text-lg flex flex-col items-center justify-center py-2">
          <Tickets size={50} strokeWidth={1} color="#ec003f" />
          Create an account
        </CardTitle>
        <CardDescription className="text-center">
          Welcome! Please fill in the details to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Field>
            <SigninWithGoogleButton message={"Sign up with Google"} />
          </Field>
          <div className="my-8 flex items-center justify-center">
            <Separator />
            <p className="absolute px-4 bg-card  mx-4 text-sm">Or</p>
          </div>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Johndoe@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" formAction={signup}>
                  Create Account
                </Button>

                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
