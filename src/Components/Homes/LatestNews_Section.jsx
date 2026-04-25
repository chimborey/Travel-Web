import React from 'react'
import { Link } from 'react-router-dom'
import B1 from '../../assets/Index/Blogs/blog-img01.jpg'
import B2 from '../../assets/Index/Blogs/blog-img02.jpg'
import B3 from '../../assets/Index/Blogs/blog-img03.jpg'
const blogs = [
  {
    id: 1,
    img:    B1,
    day:    '05',
    month:  'June',
    author: 'Joey Peterson',
    title:  'The Top Travel Destinations for Photography Enthusiasts',
    to:     '/blog/1',
  },
  {
    id: 2,
    img:    B2,
    day:    '06',
    month:  'June',
    author: 'Aliena Smith',
    title:  'The Best Ways to Travel with Your Significant Other',
    to:     '/blog/2',
  },
  {
    id: 3,
    img:    B3,
    day:    '07',
    month:  'June',
    author: 'Ronin Colun',
    title:  'Top 3 Adventure Destinations for Your Next Holiday',
    to:     '/blog/3',
  },
]

const LatestNews_Section = () => {
  return (
    <section className='py-16'>

      {/* ── Header ── */}
      <div className='flex flex-col md:flex-row md:items-start
        md:justify-between gap-6 mb-10'>

        {/* left */}
        <div className='flex flex-col gap-3 max-w-lg' data-aos='fade-up' data-aos-delay='300'>
          <h2 className='text-3xl md:text-4xl font-black text-white'>
            Explore <span className='text-yellow-400'>Latest News</span>
          </h2>
          <p className='text-sm text-white/70 leading-relaxed'>
            Maybe for a travel blog, wildlife site, or web development project
            here are a few sample templates you can use to simulate real-time
            news updates.
          </p>
        </div>

        {/* right — button */}
        <div className='flex-shrink-0' data-aos='fade-up' data-aos-delay='300'>
          <Link
            to='/blog'
            className='inline-block py-3 px-6 bg-green-400 hover:bg-green-300
              text-black text-sm font-bold rounded-full
              transition-all duration-300 hover:-translate-y-1 whitespace-nowrap'
          >
            See More Articles
          </Link>
        </div>

      </div>

      {/* ── Cards ── */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6' data-aos='fade-up' data-aos-delay='600'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </section>
  )
}

/* ── Blog Card ── */
const BlogCard = ({ blog }) => {
  return (
    <Link
      to={blog.to}
      className='relative rounded-2xl overflow-hidden block group
        cursor-pointer transition-all duration-300 hover:-translate-y-2'
      style={{ height: '380px' }}
    >
      {/* Image */}
      <img
        src={blog.img}
        alt={blog.title}
        className='w-full h-full object-cover transition-transform
          duration-500 group-hover:scale-105'
      />

      {/* Gradient overlay */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Date badge — top right */}
      <div
        className='absolute top-4 right-4 bg-white rounded-xl
          flex flex-col items-center justify-center'
        style={{ width: '52px', height: '58px' }}
      >
        <span className='text-gray-800 text-xl font-black leading-none'>
          {blog.day}
        </span>
        <span className='text-gray-500 text-xs font-medium'>
          {blog.month}
        </span>
      </div>

      {/* Bottom content */}
      <div className='absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2'>

        {/* Author badge */}
        <div className='w-fit'>
          <span
            className='text-xs font-semibold px-3 py-1 rounded-full'
            style={{ background: '#facc15', color: '#1a1a1a' }}
          >
            By {blog.author}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-white font-bold text-lg leading-snug
          group-hover:text-green-300 transition-colors duration-300'>
          {blog.title}
        </h3>

      </div>
    </Link>
  )
}

export default LatestNews_Section