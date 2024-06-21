import { fetchCategories } from "@/lib/Events";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  let days = request.nextUrl.searchParams.get("days") || "15";
  const categories = await fetchCategories(days);

  console.log(categories);
  return Response.json(categories);
}
