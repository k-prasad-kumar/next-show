export default async function ErrorPage({
  params,
}: {
  params: Promise<{ message: string }>;
}) {
  const message = (await params).message || "Something went wrong!";
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p>{message}</p>
    </div>
  );
}
