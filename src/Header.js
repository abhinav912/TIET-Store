import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
var logosrc="https://lmtsm.thapar.edu/assets/front/img/web-logo-01.png";

function Header() {
  const[{basket,user},dispatch]=useStateValue();

  const handleAuthentication=() => {
    if(user){
      auth.signOut();
    }
  }

  return (
    
    <div className='header'>
      <Link to="/">
        <img className="header_logo" src={logosrc}/>
      </Link>

    <div className='header_search'>
    <input className='header_searchInput' type='text'/>
    <SearchIcon className='header_searchicon'  />
    </div>
    <div className='header_nav'>
        <Link to='/login'>
        <div onClick={handleAuthentication} className='header_option'>
          <span className='header_optionLineOne'>Hello {user?user.email : 'Guest'}</span>
          <span className='header_optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
        </div>  
        </Link>
        <Link to='/orders'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>       
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
    <Link to='/checkout'>
    <div className='header_optionBasket'>
      <ShoppingCartIcon />
      <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span> 
    </div>
    </Link>
    </div>
    </div>
  )
}

export default Header