import { useRouter } from 'next/router';
import React from 'react'

const Document = () => {
  // How catch all routes works

  // to render for only single parameter then wrap the file name in [] brackets
  const routes = useRouter();
  const { params = [] } = routes?.query;

  if (params.length === 2) {
    return (
      <h2>Checking {params[0]} from {params[1]}</h2>
    )
  } else if (params.length === 1) {
    return (
      <h2>Checking {params[0]}</h2>
    )
  }

  return (
    <div>
      
      <h1>Check All Items</h1>
      <br />
      <br />
    </div>
  )
}

export default Document;