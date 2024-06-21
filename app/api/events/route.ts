import { fetchEvents } from "@/lib/Events";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  let days = request.nextUrl.searchParams.get("days") || "15";
  const events = await fetchEvents(days);
  return Response.json(events);
}
