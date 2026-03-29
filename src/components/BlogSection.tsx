import Image from "next/image";

const blogs = [
  {
    date: "Jun 25, 2024",
    title: "The Role of Prototyping in Product Design",
    excerpt:
      "This iterative process is crucial for addressing potential issues, validating design choices, and",
    image: "/images/blog-prototyping.jpg",
  },
  {
    date: "Jun 24, 2024",
    title: "Designing for User Experience: Key Considerations",
    excerpt:
      "Methods such as user interviews, surveys, and persona development help in gaining insights into user",
    image: "/images/blog-ux.jpg",
  },
  {
    date: "Jun 23, 2024",
    title: "The Future of Product Design: Trends to Watch in 2024",
    excerpt:
      "Designers are increasingly focusing on creating products with minimal environmental impact by using",
    image: "/images/blog-future.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full flex justify-center items-center px-10 py-[100px] overflow-hidden">
      <div className="max-w-[1360px] w-full flex flex-col gap-[50px]">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
            Latest Blog
          </p>
          <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010]">
            Stay up to Date with the Latest News
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href="#"
              className="flex flex-col gap-0 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full aspect-[455/541] overflow-hidden rounded-t-[10px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 border border-t-0 border-[#e5e5e5] rounded-b-[10px]">
                <span className="text-[13px] font-medium text-[#595959]">
                  {blog.date}
                </span>
                <h3 className="text-[24px] font-medium leading-[1.2] text-[#101010]">
                  {blog.title}
                </h3>
                <p className="text-sm leading-[1.5] text-[#595959]">
                  {blog.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
