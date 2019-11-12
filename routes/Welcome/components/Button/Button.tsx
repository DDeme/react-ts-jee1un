import React from 'react'


export const Button = (props) => {
  return <button class="w-full mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" {...props}>
            <span>{props.children}</span>
        </button>
}

