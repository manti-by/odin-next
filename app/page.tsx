import Sensors from "@/app/ui/sensors"
import Services from "@/app/ui/services"


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-zinc-900 p-4 md:h-52">
        <h1 className="text-4xl text-white">Welcome to ODIN server</h1>
      </div>
      <div className="mt-4 p-4">
        <h2 className="py-6 text-3xl text-white">Sensors</h2>
        <div className="flex justify-around rounded-lg bg-zinc-800 py-2 md:w-2/4">
          <Sensors />
        </div>
        <h2 className="py-6 text-3xl text-white">Local Services</h2>
        <div className="flex justify-center rounded-lg bg-zinc-800 py-2 md:w-2/4">
          <Services />
        </div>
      </div>
    </main>
  )
}
