import Navbar from "@kourse/components/Navbar";

export default function KoursePage() {
  return (
    <div className="flex w-full min-h-[100svh] bg-gradient-to-t from-kourse-primary to-kourse-primary/95">
      <div className="container px-5 lg:px-0 mx-auto flex flex-col w-full lg:py-10 py-5">
        <Navbar />
      </div>
    </div>
  );
}
