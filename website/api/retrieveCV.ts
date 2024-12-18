import { list } from '@vercel/blob'

export default async function handler(req: Request) {
  if (req.method === 'GET') {
    try {
      const { blobs } = await list()
      return new Response(JSON.stringify(blobs), { status: 200 })
    } catch (error) {
      console.error('Error retrieving blobs:', error)
      return new Response('Error retrieving blobs', { status: 500 })
    }
  } else {
    return new Response('Method Not Allowed', { status: 405 })
  }
}
