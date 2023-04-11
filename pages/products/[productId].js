import { useRouter } from 'next/router';
import React from 'react'

const ProductDetails = () => {
  const router = useRouter();

  return (
    <div>
      
      <h1>Know more about {router?.query?.productId}</h1>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repudiandae necessitatibus qui eveniet, ex, sed molestiae amet quas rem excepturi exercitationem maxime autem modi, dolorum maiores assumenda quia quae natus. Obcaecati voluptas vero labore amet possimus culpa esse temporibus voluptatem sunt nam, inventore quos consequatur debitis autem sed exercitationem quas iure facilis. Neque deleniti nesciunt provident! Vitae libero quae debitis voluptatum officia! Beatae, fugit illo expedita aliquid voluptas eum laborum quod repellendus, tempora cupiditate in dolore. Reprehenderit eveniet voluptate, fugit rerum velit maiores error delectus eos accusantium quia labore quis maxime id quod ad aspernatur dolore? Esse, velit minus adipisci, suscipit sint natus similique, officiis vel vero quas cupiditate temporibus. Voluptatibus inventore rem doloremque soluta tenetur natus totam cumque ipsum harum vel praesentium, numquam veritatis, debitis accusamus deserunt aliquid recusandae tempora. Soluta eaque maiores veniam accusantium ad cum animi dignissimos sequi voluptas illum. Voluptatum cum deleniti natus ipsum quod possimus.</p>
      <br />
    </div>
  )
}

export default ProductDetails;