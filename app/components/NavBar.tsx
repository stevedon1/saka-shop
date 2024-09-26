import { FaSearch } from 'react-icons/fa';
import { Categories } from './Categories';

export const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <h1 className='text-xl font-bold text-purple-500 font-mono'>Saka App</h1>
            <FaSearch/>
        </div>
        <Categories/>
    </div>
  )
}
