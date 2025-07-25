import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    
  ];

  return (
            <nav>
                <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> :
                        <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                
                <ul className={`md:flex gap-8 absolute duration-1000 bg-amber-500 ${open ? 'left-0' : '-left-30'}`}>
                    {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                        ></Link>)
                    }
                </ul>
            </nav>
        
        );
};

export default Navbar;
