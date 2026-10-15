
"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold text-red-600">
        مشکلی پیش آمده!
      </h2>

      <p className="text-gray-600">
        دریافت اطلاعات با خطا مواجه شد.
      </p>

      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
      >
        تلاش مجدد
      </button>
    </main>
  );
}


