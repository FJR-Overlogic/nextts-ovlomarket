import Image from "next/image";

export default function Category() {
  return (
    <div
      className="bg-warning text-center rounded"
      style={{ width: "168px", height: "232px", padding: "1rem" }}
    >
      <h5 className="text-black fw-semibold">Tech</h5>
      <Image src="/laptop.png" width={500} height={500} alt="laptop" />
    </div>
  );
}
