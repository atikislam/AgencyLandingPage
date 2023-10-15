import {useEffect, useState} from "react";
import { Link } from 'react-scroll';
// react Icons
import {FaXmark,FaBars} from "react-icons/fa6";

const Header = () => {
    const [isMenuOpen,setMenuOpen] = useState(false);
    const [isSticky,setSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () =>{
            if(Window.scrollY > 100){
                setSticky(true);
            }else setSticky(false);
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.addEventListener('scroll',handleScroll);
        }
    }, []);
    // nav Item Array
    const navItem = [
        {link:"Home",path:"home"},
        {link:"Services",path:"services"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimonials",path:"testimonials"},
        {link:"FAQ",path:"faq"}
    ]
    return (
        <div>
            <header className=' w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
                <nav className={` py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                    {/* Nav Item for lg device */ }
                    <div className="flex justify-between items-center text-base gap-8">
                        <a className='text-2xl font-semibold flex items-center space-x-3' href="#">Logo</a>
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItem.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-black hover:text-brandPrimary first:font-medium'>{link}</Link>)
                            }
                        </ul>
                        {/*btn for large Devices */}
                        <div className="space-x-12 hidden lg:flex items-center">
                            <a href="#" className="hidden lg:flex items-center">Login</a>
                            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey ">Sign Up</button>
                        </div>

                    {/*    Mobile Menu     */}
                        <div className="md:hidden">
                            <button onClick = {toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-green-500">
                                {
                                    isMenuOpen ? (<FaXmark className="h-6 w-6"/>):(<FaBars className="h-6"/>)
                                }
                            </button>
                        </div>
                    </div>
                {/*    nav Item for mobile*/}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 left-0 right-0" :"hidden"}`}>
                        {
                            navItem.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </div>
                </nav>
            </header>
        </div>
    );
};
export default Header;