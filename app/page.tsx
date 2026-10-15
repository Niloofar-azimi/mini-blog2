
import Slider from "../component/Slider";
import PostPagination from "../component/PostPagination";
import { getPosts } from "@/services/postService";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <Slider />

      <PostPagination posts={posts} />
    </main>
  );
}
