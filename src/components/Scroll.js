import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{ height: '500px', overflowY: 'scroll' }}>
      { props.children }
    </div>
  )
} 

export default Scroll