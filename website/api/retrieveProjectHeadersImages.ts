import { list } from '@vercel/blob'

// takes a list of pathnames and returns the pathnames that are images
export async function GET(pathnames: string[]): Promise<Response> {
  console.log('pathnames:', pathnames)
  const images = await list({
    cursor: '',
    prefix: 'project_images/',
  })

  // remove the blob with pathname == 'images/'
  images.blobs.shift()

  // remove the images/ prefix from the pathnames
  images.blobs = images.blobs.map((blob) => {
    blob.pathname = blob.pathname.replace('project_images/', '')
    return blob
  })

  return new Response(JSON.stringify(images.blobs), { status: 200 })
}
