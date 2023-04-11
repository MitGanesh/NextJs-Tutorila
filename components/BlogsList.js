import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BlogsList = ({ blogs }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      {blogs.map(blog => (
        <Link key={blog.id} href={`/blogs/${blog.id}`}>
          <div style={{ width: '240px' }}>
            <Image width={180} height={150} style={{ objectFit: 'cover', borderRadius: '8px' }} src={blog.id % 2 === 0 ? 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' : 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
            <h3 style={{ textOverflow: 'ellipsis' }}>{blog.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogsList;