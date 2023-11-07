import React from 'react'

function UserData(props) {
  return (
    <div>                
        {
        <div>
            <h1>{props.isLoaded ? 'Data loaded!' : 'Loading ...'}</h1>
        </div>
        }       
    </div>
  )
}

export default UserData