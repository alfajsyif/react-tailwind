import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/solid';
import Link from '../Link/Link';

const Navbar = (props) => {
    const [open,setOpen] = useState(false);
    const routs = [
        {id:1, name:'Home', link:'./home'},
            {id:2, name:'Shop', link:'./home'},
            {id:3, name:'Deals', link:'./home'},
            {id:4, name:'Coupons', link:'./home'},
            {id:5, name:'Contact', link:'./home'}
        
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>} 
            </div>
            <ul className={`md:flex justify-center absolute  md:static bg-indigo-300 w-full duration-500 ease-in ${open ?'top-6' : 'top-[-120px]' }`}>
           {
               routs.map(rout => <Link key={rout.id}
               rout={rout}
               ></Link> )
           }
            </ul>
        </nav>
    );
};

export default Navbar;