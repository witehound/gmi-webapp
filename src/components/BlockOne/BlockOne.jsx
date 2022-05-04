import React from 'react'
import './BlockOne.css'
import blockOneA from '../../../assets/blockOneA.jpg'
import blockOneB from '../../../assets/blockOneB.jpg'

function BlockOne() {
  return (
    <div className='blockone'>
      <div className="blockone-container">
          <div className="blockone-imgone">
            <img src={blockOneA} alt="" className='blockonea'/>
          </div>
          <div className="blockone-text">
            blockone
          </div>
          <div className="blockone-imgtwo">
            <img src={blockOneB} alt="" className='blockoneb'/>
          </div>
      </div>
    </div>
  )
}

export default BlockOne