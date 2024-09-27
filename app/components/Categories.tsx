import React from 'react'
import { categories } from '../constants';

export const Categories = () => {
  return (
    <div>
        <div className='flex  overflow-x-auto whitespace-nowrap scrollbar-hide '>
            {categories.map((category)=>(
                <p className='border-2 border-gray-600 m-1 px-2 rounded-md cursor-pointer hover:bg-slate-300 hover:poin' key={category.title}>{category.title}</p>
            ))}
        </div>
    </div>
  )
}
