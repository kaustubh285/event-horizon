import { fetchEvents } from "@/lib/Events";

export async function GET() {
  const events = await fetchEvents();
  return Response.json(events);
}
