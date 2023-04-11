import React from 'react'

const ProfileList = ({ users }) => {
  return (
    <div>
      <h2>Profile List</h2>
      {users.map(user => (
        <div key={user?.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default ProfileList