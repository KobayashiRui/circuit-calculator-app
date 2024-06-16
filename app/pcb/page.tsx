import Link from 'next/link'
import TraceWidthCalculator from '@/components/pcb/TraceWidthCalculator'

export default function Pcb(){

  return (
    <main className="">
      <div className="grid grid-cols-3 w-full py-12">
        <div>
          <Link href="/" className="text-green-500 hover:text-green-700 flex pl-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Go Home
          </Link>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">PCB Calculator</h1>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col justify-center">
        <TraceWidthCalculator></TraceWidthCalculator>
      </div>
    </main>
  )
}