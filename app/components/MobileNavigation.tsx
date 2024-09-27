import React from 'react';
import { navLinksandIcons } from '../constants';
import Link from 'next/link';

const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around py-2">
         {
            navLinksandIcons.map(({component:Icon, href},index)=>(
                <div key={index}>
                    <Link href={href}>
                       {<Icon className='text-5xl p-2 rounded-md hover:bg-gray-800 hover:text-white cursor-pointer border-2'/>}
                    </Link>
                </div>
            ))
         }
    </nav>
  );
};

export default MobileNavigation;
