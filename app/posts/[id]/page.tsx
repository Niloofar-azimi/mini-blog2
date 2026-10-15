import { notFound } from "next/navigation";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetails({ params }: Props) {
  const { id } = await params;

  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!postResponse.ok) {
    notFound();
  }

  const post: Post = await postResponse.json();

  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );

  if (!userResponse.ok) {
    throw new Error("Failed to fetch author");
  }

  const user: User = await userResponse.json();

  return (
    <article className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">
        {post.title}
      </h1>

      <p className="mb-6 text-sm text-slate-500">
        نویسنده: {user.name}
      </p>

      <p className="leading-8">
        {post.body}
      </p>
    </article>
  );
}