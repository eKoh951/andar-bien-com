import { Metadata } from 'next'
import { serverClient } from './_trpc/serverClient'

export const metadata: Metadata = {
  title: 'AndarBien.com',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data = await serverClient.getData()
  console.log('data', data)

  return <div className="container mx-auto p-4">hi</div>
}
