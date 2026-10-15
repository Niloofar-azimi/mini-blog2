
export default function Loading() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

      <p className="text-gray-600">
        در حال دریافت مطالب...
      </p>
    </main>
  );
}
