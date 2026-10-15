
import Link from "next/link";
import type { Post } from "@/types/post";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h2 className="mb-3 line-clamp-2 text-lg font-bold leading-8 text-gray-900">
        {post.title}
      </h2>

      <p className="mb-5 flex-1 text-sm leading-7 text-gray-600">
        {post.body.slice(0, 100)}...
      </p>

      <Link
        href={`/posts/${post.id}`}
        className="mt-auto self-start font-medium text-blue-600 hover:text-blue-800 hover:underline"
      >
        ادامه مطلب ←
      </Link>
    </article>
  );
}
