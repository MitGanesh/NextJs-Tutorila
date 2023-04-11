import Image from 'next/image';
import React from 'react'

const secondBlog = () => {
  return (
    <div>
      
      <h3>Comics</h3>
      <br />
      <Image width={450} height={650} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/7768663/pexels-photo-7768663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </div>
  )
}

export default secondBlog;