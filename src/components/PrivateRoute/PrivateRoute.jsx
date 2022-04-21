import React from 'react'

function PrivateRoute({children, account}) {
  return (
    <>
        {
            account && children
        }
    </>
  )
}

export default PrivateRoute