import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="w-full py-12">
        <h1 className="text-3xl font-bold text-center">Circuit Calculator</h1>
      </div>
      <div className="flex justify-center">
        <div>
          <ul className="list-disc">
            <li>
              <Link href="/pcb" className="text-green-500 hover:text-green-700">PCB関連</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
