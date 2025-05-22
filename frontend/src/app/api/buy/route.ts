export async function POST(req: Request) {
  const body = await req.json()
  console.log('Buy:', body)

  return Response.json({ success: true, message: 'Order received!' })
}
