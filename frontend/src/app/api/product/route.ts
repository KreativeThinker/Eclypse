import { NextResponse } from 'next/server'
export async function GET() {
  return Response.json({
    id: 'S1',
    name: 'Silhouette No. 1',
    price: 7999.0,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Vermilion'],
    media: {
      video: '/media/videos/video-1.mp4',
      images: [
        '/media/images/product-back',
        '/media/images/product-side',
        '/media/images/product-back-long',
      ],
    },
  })
}
