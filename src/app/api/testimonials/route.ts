import { Pool } from "pg";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Testimonial = {
  id: number;
  name: string;
  roleFr: string;
  roleEn: string;
  quoteFr: string;
  quoteEn: string;
  rating: number;
};

declare global {
  var testimonialsPool: Pool | undefined;
}

export async function GET() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return Response.json({ error: "DATABASE_URL is not configured" }, { status: 503 });
  }

  const pool = (globalThis.testimonialsPool ??= new Pool({ connectionString }));

  try {
    const { rows } = await pool.query<Testimonial>(`
      SELECT
        id,
        name,
        role_fr AS "roleFr",
        role_en AS "roleEn",
        quote_fr AS "quoteFr",
        quote_en AS "quoteEn",
        rating
      FROM testimonials
      WHERE is_published = TRUE
      ORDER BY display_order, id
    `);

    return Response.json(rows, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Failed to load testimonials", error);
    return Response.json({ error: "Unable to load testimonials" }, { status: 503 });
  }
}