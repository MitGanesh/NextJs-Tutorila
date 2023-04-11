import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <br />
      <Link href="/" style={{ marginRight: '25px' }}>Home</Link>
      <Link href="/about" style={{ marginRight: '25px' }}>About Us</Link>
      <Link href="/blogs" style={{ marginRight: '25px' }}>Blogs</Link>
      <Link href="/products" style={{ marginRight: '25px' }}>Products</Link>
      <Link href="/profile">Profile</Link>
      <br />
      <br />
      <hr />
      <br />
    </div>
  )
}

export default Header