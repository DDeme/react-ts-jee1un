import React from 'react'


export const MenuButton = ({onClick}) => <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 text-gray-100 hover:text-gray-400 hover:border-white" onClick={onClick}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>