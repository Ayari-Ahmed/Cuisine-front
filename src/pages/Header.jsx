
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row  p-4  mt-2'>
    <div className='m-2 w-1/5 ml-10 '>
      <h1 className='text-3xl font-bold'>Logo</h1>
    </div>
    <div className='m-2 w-3/5 flex flex-wrap mx-auto font-medium justify-between items-center ml-auto'>
      <Link to='/' className='m-2'>Accueil</Link>
      <Link to='/Propos' className='m-2'>A propos</Link>
      <Link to='/Services' className='m-2'>Nos Services</Link>
      <Link to='/Events' className='m-2'>Événements</Link>
      <Link to='/Act' className='m-2'>Actualités</Link>
      <Link to='/Doc' className='m-2'>Documentation</Link>
      <Link to='/Contact' className='m-2'>Contact</Link>

      <div className='m-2'>
        <svg 
          className='w-6 h-6 text-green-500' 
          fill='currentColor' 
          viewBox='0 0 24 24' 
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 2a8 8 0 016.32 12.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z'/>
        </svg>
      </div>
      <Link to='/connect' className='m-2 font-medium underline pb-2' style={{ color: '#FC5A1A' }}> Se Connecter</Link>
    </div>
  </div>
  )
}

export default Header
