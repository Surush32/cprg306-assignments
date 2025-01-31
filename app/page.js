import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-4">
        <Link href="/week-2" className="text-blue-500 hover:underline">
          Week 2 Assignment
        </Link>
        <Link href="/week-3" className="text-blue-500 hover:underline">
          Week 3 Assignment
        </Link>
        <Link href="/week-4" className="text-blue-500 hover:underline">
          Week 4 Assignment
        </Link>
      </div>
    </main>
  );
}
