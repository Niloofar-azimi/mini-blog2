import { notFound } from "next/navigation";

type PostDetailProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function PostDetail({
  params,
}: PostDetailProps) {
  const { id } = await params;
  const response=await  fetch(  `https://jsonplaceholder.typicode.com/posts/${id}`)
  if(!response.ok){
    throw new Error("error")
  }
  const data=await response.json()

  return <h1>شناسه پست: {id}</h1>;
}