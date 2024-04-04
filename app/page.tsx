import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="https://darl-p-001.sitecorecontenthub.cloud/api/public/content/6c25638ae9e746fab8b546b23ce86e5a?v=bf6e7679"
          width={1200}
          height={533}
          alt="Test image"
        />
      </div>
    </main>
  );
}
