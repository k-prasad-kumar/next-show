import { MailCheck } from "lucide-react";

const page = () => {
  return (
    <div className="w-full h-screen max-h-screen flex justify-center items-center">
      <div className="text-center flex flex-col items-center gap-4">
        <MailCheck color="green" size={64} strokeWidth={1} />
        <p className="text-green-500">
          Email sent! Please check your inbox to verify your email.
        </p>
      </div>
    </div>
  );
};
export default page;
