import Container from "@/components/container"
import Link from "next/link"

export default function NewTicket() {
  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-white px-4 py-1 rounded bg-gray-900"
          >
            Back
          </Link>
          <h1 className="text-3xl font-bold">New Ticket</h1>
        </div>
        <form className="flex flex-col mt-6">
          <label className="mb-1 font-medium text-lg">Title</label>
          <input
            className="w-full border-2 rounded-md px-2 mb-2 h-11"
            type="text"
            required
          />
          <label className="mb-1 font-medium text-lg">Description</label>
          <textarea
            className="w-full border-2 rounded-md px-2 mb-2 h-24 resize-none pt-2"
            required
          ></textarea>
          <label className="mb-1 font-medium text-lg">
            Select the customer
          </label>
          <select className="w-full border-2 rounded-md px-2 mb-2 h-11  bg-white">
            <option value="customer1">Customer 1</option>
          </select>
        </form>
      </main>
    </Container>
  )
}