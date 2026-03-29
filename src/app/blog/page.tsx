import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog — Sadewa",
  description: "Stay up to date with the latest AI insights.",
};

const featuredPost = {
  date: "Mar 15, 2025",
  title: "AI-Powered Growth: How Startups Can Scale Smarter in 2025",
  excerpt:
    "Discover how forward-thinking startups are leveraging artificial intelligence to accelerate growth, optimize operations, and outpace the competition in an increasingly digital landscape.",
  image: "/images/blog/blog1.jpg",
};

const blogPosts = [
  {
    date: "Jun 25, 2024",
    title: "The Role of Prototyping in Product Design",
    excerpt:
      "This iterative process is crucial for addressing potential issues, validating design choices, and ensuring a seamless user experience.",
    image: "/images/blog/blog1.jpg",
  },
  {
    date: "Jun 24, 2024",
    title: "Designing for User Experience: Key Considerations",
    excerpt:
      "Methods such as user interviews, surveys, and persona development help in gaining insights into user needs and behaviors.",
    image: "/images/blog/blog1.jpg",
  },
  {
    date: "Jun 23, 2024",
    title: "The Future of Product Design: Trends to Watch in 2024",
    excerpt:
      "Designers are increasingly focusing on creating products with minimal environmental impact by using sustainable materials and processes.",
    image: "/images/blog/blog1.jpg",
  },
  {
    date: "Jun 20, 2024",
    title: "How AI is Revolutionizing Customer Service",
    excerpt:
      "From chatbots to predictive analytics, AI is transforming the way businesses interact with customers and resolve issues at scale.",
    image: "/images/blog/blog1.jpg",
  },
  {
    date: "Jun 18, 2024",
    title: "Building Scalable AI Systems",
    excerpt:
      "Learn the architectural patterns and infrastructure decisions that enable AI systems to grow alongside your business demands.",
    image: "/images/blog/blog1.jpg",
  },
  {
    date: "Jun 15, 2024",
    title: "The Ethics of AI in Business",
    excerpt:
      "As AI becomes more prevalent, organizations must navigate the complex ethical considerations surrounding bias, transparency, and accountability.",
    image: "/images/blog/blog1.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="w-full flex justify-center items-center px-5 md:px-20 pt-[140px] pb-[60px]">
          <div className="max-w-[1440px] w-full flex flex-col gap-4">
            <p className="label text-secondary">BLOG</p>
            <h1 className="heading-lg text-primary">Latest insights</h1>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full flex justify-center items-center px-5 md:px-20 pb-[80px]">
          <div className="max-w-[1440px] w-full">
            <a href="#" className="group flex flex-col md:flex-row gap-8 cursor-pointer">
              <div className="relative w-full md:w-1/2 aspect-[16/10] overflow-hidden rounded-[16px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center gap-4 md:w-1/2">
                <span className="label-sm text-secondary">{featuredPost.date}</span>
                <h2 className="heading-md text-primary">{featuredPost.title}</h2>
                <p className="body-md text-secondary">{featuredPost.excerpt}</p>
              </div>
            </a>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="w-full flex justify-center items-center px-5 md:px-20 pb-[100px]">
          <div className="max-w-[1440px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {blogPosts.map((post) => (
                <a
                  key={post.title}
                  href="#"
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[455/541] overflow-hidden rounded-t-[10px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 border border-t-0 border-light-gray rounded-b-[10px]">
                    <span className="label-sm text-secondary">{post.date}</span>
                    <h3 className="heading-xs text-primary">{post.title}</h3>
                    <p className="body-sm text-secondary">{post.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
