import { fetchCategories } from "@/lib/Events";

export async function GET() {
  const categories = await fetchCategories();
  return Response.json(categories);
}
