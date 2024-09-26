import React from 'react'
import { categories } from '../constants';

export const Categories = () => {
  return (
    <div>
        <div className='flex h-6 overflow-x-auto whitespace-nowrap'>
            {categories.map((category)=>(
                <p className='' key={category.title}>{category.title}</p>
            ))}
        </div>
    </div>
  )
}
