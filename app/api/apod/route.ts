import { fetchApod } from "@/lib/Events";
import { NextRequest } from "next/server";

export async function GET() {
  const apod = await fetchApod();

  return Response.json(apod);
}
