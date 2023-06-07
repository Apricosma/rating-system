import React from 'react'

const Dialog = ({ isOpen, onClose }) => {
  return (
    <>
        {isOpen && (
            <div className='dialog'>
                <div className='dialog-content'>
                    <h2>Hello!</h2>
                    <p>I am a dialog box</p>
                    <p>It's nice to meet you!</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        )}
    </>
  )
}

export default Dialog