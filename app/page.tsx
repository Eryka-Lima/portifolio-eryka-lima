import Image from "next/image"

export default function Home() {
  return (
    <div>
      <h1>ERYKA LIMA DA SILVA</h1>

      <Image 
        src="/img1.jpg" 
        alt="Foto exemplo" 
        width={500}
        height={300}
        />
    </div>

  );
}