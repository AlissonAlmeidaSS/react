// eslint-disable-next-line no-unused-vars
import React from 'react'

const todo = ({todo}) => {
  return (
    <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p>({todo.category})</p>
            </div>
            <div>
              <button>Completa </button>
              <button>X</button>
            </div>
          </div>
  )
}

export default todo