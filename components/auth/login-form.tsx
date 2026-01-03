import { cn } from "@/lib/utils";
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
import { login } from "@/lib/auth-actions";
import SigninWithGoogleButton from "./signin-with-google-button";
import { Separator } from "../ui/separator";
import { Tickets } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-full px-0 md:px-4">
        <CardHeader>
          <CardTitle className="text-center text-lg flex flex-col items-center justify-center py-2">
            <Tickets size={50} strokeWidth={1} color="#ec003f" />
            Login to Next Show
          </CardTitle>
          <CardDescription className="text-center">
            Welcome back! Please login in to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Field>
              <SigninWithGoogleButton message={"Login with Google"} />
            </Field>
            <div className="my-8 flex items-center justify-center">
              <Separator />
              <p className="absolute px-4 bg-card mx-4 text-sm">Or</p>
            </div>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="********"
                />
              </Field>
              <Field>
                <Button type="submit" formAction={login}>
                  Login
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/signup">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
