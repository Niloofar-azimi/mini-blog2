
import { getPosts } from "@/services/postService";
import PostPagination from "@/component/PostPagination";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        همه پست‌ها
      </h1>

      <PostPagination posts={posts} />
    </main>
  );
}
