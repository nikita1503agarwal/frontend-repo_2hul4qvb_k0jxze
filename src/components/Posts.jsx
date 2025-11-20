import PostCard from "./PostCard";

const posts = [
  {
    title: "Lessons from shipping AI features fast",
    date: "Nov 12, 2025",
    read: 7,
    excerpt: "How to validate, scope, and deliver AI features that actually move the needle.",
    tags: ["AI", "Execution"],
  },
  {
    title: "Designing APIs people love to use",
    date: "Oct 28, 2025",
    read: 6,
    excerpt: "Principles for building clear, intuitive, and stable interfaces.",
    tags: ["APIs", "DX"],
  },
  {
    title: "From prototype to product",
    date: "Sep 4, 2025",
    read: 5,
    excerpt: "A practical approach for turning scrappy hacks into durable systems.",
    tags: ["0→1", "Product"],
  },
];

export default function Posts() {
  return (
    <section id="posts" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl font-bold text-white">Recent writing</h2>
        <a href="#" className="text-cyan-300 hover:text-cyan-200">View all</a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
