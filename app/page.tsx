import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-svh place-items-center bg-white px-6 text-[#001711]">
      <section className="flex flex-col items-center gap-8 text-center">
        <Image
          src="/logo.svg"
          alt="Marchera"
          width={216}
          height={40}
          priority
          className="h-10 w-auto"
        />
        <h1 className="text-[clamp(38px,7vw,72px)] font-medium leading-none">
          Coming soon
        </h1>
      </section>
    </main>
  );
}
