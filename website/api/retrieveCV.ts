import { list } from '@vercel/blob'

// export default async function handler(req: Request) {
//   console.log('Request:', req)
//   if (req.method === 'GET') {
//     try {
//       const { blobs } = await list()
//       return new Response(JSON.stringify(blobs), { status: 200 })
//     } catch (error) {
//       console.error('Error retrieving blobs:', error)
//       return new Response('Error retrieving blobs', { status: 500 })
//     }
//   } else {
//     return new Response('Method Not Allowed', { status: 405 })
//   }
// }

export async function GET(): Promise<Response> {
  // console.log('Request:', request)
  console.log('Trying to get the cv file')

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('BLOB_READ_WRITE_TOKEN is not set')
    return new Response('BLOB_READ_WRITE_TOKEN is not set', { status: 401 })
  }

  try {
    const { blobs } = await list()

    // filter the blobs to only return the cv file
    // console.log('blobs:', blobs)

    // get the blob with pathname == 'docs/cv.pdf'
    const final_blob = blobs.filter((blob) => blob.pathname == 'docs/cv.pdf')

    return new Response(JSON.stringify(final_blob), { status: 200 })
  } catch (error) {
    console.error('Error retrieving blobs:', error)
    return new Response('Error retrieving blobs', { status: 500 })
  }
}
