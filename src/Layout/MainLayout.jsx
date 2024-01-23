import { Outlet } from "react-router-dom";
import logo from './../assets/logo.png';

const MainLayout = () => {
    const navItems = <>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="#policy">Policy</a>
        </li>
        <li>
            <a href="#objective">Objective</a>
        </li>
        <li>
            <a href="#customer-focus">Customer Focus</a>
        </li>
        <li>
            <a href="#department-goal">Departmental Goal</a>
        </li>
    </>
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#1a1622]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-[#EEF4FA]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <div className="flex items-center justify-start md:justify-between">
                                <img className="w-9" src={logo} alt="Quality" />
                                <h3 className="text-2xl md:text-3xl text-[#EEF4FA]">Quality</h3>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-xl text-[#EEF4FA]">
                                {/* Navbar menu content here */}
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#1a1622] text-[#EEF4FA]">
                        {/* Sidebar content here */}
                        {navItems}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MainLayout;