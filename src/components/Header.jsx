import React from 'react'
import '../styles/Header.css'


const navlink = [
    {path:'#',
        display:"Home",
    },
    {path:'#',
        display:"Schedule",
    },
    {path:'#',
        display:"Classes",
    },
    {path:'#',
        display:"Product",
    },
]

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <div className='logo-img'>
                        <img src=''/>
                    </div>
                    <h2> GymHouse </h2>
                </div>

                <div className='navigation'>
                    <ul className='menu'>
                        {
                            navlink.map( item=>(
                                <li className='nav-item'>
                                    <a href={item.path}>
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className='nav-rt'>
                    <button className='register_btn'>Signup</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
