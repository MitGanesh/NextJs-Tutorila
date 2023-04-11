import Image from 'next/image';
import React from 'react'

const firstBlog = () => {
  return (
    <div>
      <h3>Spider Man - Far from Home</h3>
      <br />
      <Image width={450} height={650} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/2859016/pexels-photo-2859016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </div>
  )
}

export default firstBlog;