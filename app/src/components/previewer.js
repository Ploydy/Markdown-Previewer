import React from 'react'
import { HiArrowsPointingOut } from "react-icons/hi2";
export default function Previewer() {
  return (
    <div className='previewer'>
      <header>
        <h3> Previewer Page </h3>
        <HiArrowsPointingOut className='x-icon' />
      </header>
      <div className=''>
        <h1> Welcome to my React Markdown Previewer! </h1>
      </div>
    </div>
  )
}

