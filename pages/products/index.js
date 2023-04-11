import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Product = () => {
  return (
    <div>
      
      <h1>Products</h1>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

        <Link href="/products/Phones">
          <h3>Phones</h3>
          <p>Product Info comes here</p>
          <Image width={250} height={250} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg" />
        </Link>
        <Link href="/products/Camera">
          <h3>Camera</h3>
          <p>Product Info comes here</p>
          <Image width={250} height={250} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg" />
        </Link>
        <Link href="/products/Drons">
          <h3>Drons</h3>
          <p>Product Info comes here</p>
          <Image width={250} height={250} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </Link>
        <Link href="/products/Accesories">
          <h3>Accesories</h3>
          <p>Product Info comes here</p>
          <Image width={250} height={250} style={{ objectFit: 'cover' }} src="https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </Link>
      </div>
    </div>
  )
}

export default Product;