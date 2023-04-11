import BlogsList from '@/components/BlogsList';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <br />
      <br />
      <BlogsList blogs={blogs} />
    </div>
  )
}

export default Blogs;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      blogs : data.slice(0,10)
    }
  }
}