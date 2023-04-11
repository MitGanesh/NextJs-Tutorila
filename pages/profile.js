import ProfileList from '@/components/ProfileList';
import React from 'react'

const profile = ({ users }) => {
  return (
    <div>
      <h1>Profile - (Static Genration) How to pre-render with external data fetching</h1>
      <br />
      <ProfileList users={users} />
    </div>
  )
}

export default profile;

// This is how to pre-render with external data fetching.

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data
    }
  }
}