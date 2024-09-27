import { FaSearch, FaFilter } from 'react-icons/fa';
import { Categories } from './Categories';

export const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between border-2 '>
            <h1 className='text-xl font-extrabold text-purple-500 font-sans flex align-center justify-center '>SAKA APP</h1>
            <div className='flex'>
              <FaFilter className='m-2 cursor-pointer text-xl'/>
            <FaSearch className='m-2 mr-2 cursor-pointer text-xl'/>
            </div>
        </div>
        <Categories/>
    </div>
  )
}
