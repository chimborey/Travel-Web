import Blog_Hero from "../Components/Blogs/Blog_Hero";
import BlogDetails from "../Components/Blogs/BlogDetails";

export default function Blog() {
      return (
            <>
            {/* Blog_Hero Section */}
                  <Blog_Hero />
            {/* BlogDetails Section */}
                  <section className="w-full overflow-hidden  py-14">
                        <main className=' mt-12 container relative z-10'>
                              <BlogDetails />
                        </main>
                  </section>
            </>
      )
}