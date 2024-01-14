// import {Navbar , Nav , Container } from 'react-bootstrap';
// import {FaShoppingCart , FaUser} from 'react-icons/fa';

// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (

//     <header>
//       <Navbar bg= 'dark' variant = 'dark' expand = 'md' collapseOnSelect>
//         <Container>
//           <Navbar.Brand>Unthinkable Ecommerce</Navbar.Brand>
//           <Navbar.Toggle aria-controls = 'basic-navbar-nav' />
//           <Navbar.Collapse id = "basic-navbar-nav">
//             <Nav className = 'ms-auto'>
//               <Link to = '/cart' className = ''>
//                 <FaShoppingCart /> Cart  
//               </Link>
//               <Link to = "/login"><FaUser /> Sign In  </Link> 
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>

//   )
// }


import React , {useState} from 'react'
import LoginModal from './LoginModal';
import SignInModal from './SignInModal';
export default function Navbar() {
    const [open , setOpen] = useState(false);
    const [signInOpen, signInSetOpen] = useState(false);
  return (
    // <!-- component -->
<nav class="bg-white shadow">
        <div className='flex flex-col md:flex-row justify-between items-center p-3 '>
            <h1>Unthinkable ecommerce</h1>
            <div className = 'basis-1/5 flex justify-around items-center '>
                <button onClick = {() => setOpen(!open)}>Login</button>
                <button onClick = {() => signInSetOpen(!signInOpen)}>Sign in</button>
            </div>

            <LoginModal isOpen = {open} setIsOpen = {setOpen} />
            <SignInModal isOpen = {signInOpen} setIsOpen = {signInSetOpen} />
        </div>
</nav>
  )
}
