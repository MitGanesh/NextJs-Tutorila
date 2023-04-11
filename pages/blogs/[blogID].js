import Image from 'next/image';
import React from 'react'

const BlogPage = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
      <Image width={650} height={450} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </div>
  )
}

export default BlogPage;

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map((blog => {
    return {
      params : { blogID : `${blog.id}`}
    }
  }))

  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogID}`);
  const data = await response.json();

  return {
    props: {
      blog: data
    }
  }
}