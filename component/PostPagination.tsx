
"use client";

import { useState } from "react";
import type { Post } from "@/types/post";
import PostCard from "./PostCard";

type PostPaginationProps = {
  posts: Post[];
};

const POSTS_PER_PAGE = 4;

export default function PostPagination({
  posts,
}: PostPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-bold">
        آخرین مطالب
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              setCurrentPage((page) => page - 1)
            }
            disabled={currentPage === 1}
            className="rounded-lg border px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            قبلی
          </button>

          <span className="text-sm text-gray-600">
            صفحه {currentPage} از {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((page) => page + 1)
            }
            disabled={currentPage === totalPages}
            className="rounded-lg border px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            بعدی
          </button>
        </div>
      )}
    </section>
  );
}
