import { neon } from '@neondatabase/serverless'

export async function getData() {
  const db_url = process.env.DATABASE_URL || ''

  const sql = neon(db_url)

  const data = await sql`SELECT * FROM project_headers`
  // console.log(data)
  return data
}

export async function GET(): Promise<Response> {
  const data = await getData()
  return new Response(JSON.stringify(data), { status: 200 })
}
