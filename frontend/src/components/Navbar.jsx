// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = (props) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isHovered1, setIsHovered1] = useState(true);
//   const [isHovered2, setIsHovered2] = useState(false);
//   const [isHovered3, setIsHovered3] = useState(false);
//   const [isHovered4, setIsHovered4] = useState(false);
//   const [isHovered5, setIsHovered5] = useState(false);
//   const [isHovered6, setIsHovered6] = useState(false);
//   const [isHovered7, setIsHovered7] = useState(false);
//   const [isHovered8, setIsHovered8] = useState(false);
//   const [isActive, setIsActive] = useState("Home");

//   const navButtonStyle = (isHovered, section) => ({
//     color:
//       isHovered || isActive === section
//         ? "red"
//         : props.mode === "light"
//         ? "black"
//         : "white",
//     transition: "all 0.3s",
//     borderBottom: isActive === section ? "1px solid red" : "none",
//   });

//   const buttonStyle = () => ({
//     border: props.mode === "light" ? "1px solid black" : "1px solid red",
//     width: "5%",
//     height: "4vh",
//     backgroundColor: isHovered ? "red" : `white`,
//     cursor: "pointer",
//     transition: "all 0.3s",
//     borderRadius: "5px",
//   });
//   return (
//     <>
//       <nav
//         className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${props.mode}`}
//         // style={{
//         //   borderBottom:
//         //     props.mode === "light" ? "1px solid black" : "1px solid red",
//         // }}
//       >
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/NewsWebApp">
//             <img
//               src={logo}
//               alt="..."
//               style={{ width: "100%", height: "6vh" }}
//             />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   aria-current="page"
//                   to="/NewsWebApp"
//                   style={navButtonStyle(isHovered1, "Home")}
//                   onMouseEnter={() => {
//                     setIsHovered1(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered1(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Home");
//                   }}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/business"
//                   style={navButtonStyle(isHovered2, "Business")}
//                   onMouseEnter={() => {
//                     setIsHovered2(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered2(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Business");
//                   }}
//                 >
//                   Business
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/entertainment"
//                   style={navButtonStyle(isHovered3, "Entertainment")}
//                   onMouseEnter={() => {
//                     setIsHovered3(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered3(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Entertainment");
//                   }}
//                 >
//                   Entertainment
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/general"
//                   style={navButtonStyle(isHovered4, "General")}
//                   onMouseEnter={() => {
//                     setIsHovered4(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered4(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("General");
//                   }}
//                 >
//                   General
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/health"
//                   style={navButtonStyle(isHovered5, "Health")}
//                   onMouseEnter={() => {
//                     setIsHovered5(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered5(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Health");
//                   }}
//                 >
//                   Health
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/science"
//                   style={navButtonStyle(isHovered6, "Science")}
//                   onMouseEnter={() => {
//                     setIsHovered6(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered6(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Science");
//                   }}
//                 >
//                   Science
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/sports"
//                   style={navButtonStyle(isHovered7, "Sports")}
//                   onMouseEnter={() => {
//                     setIsHovered7(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered7(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Sports");
//                   }}
//                 >
//                   Sports
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/technology"
//                   style={navButtonStyle(isHovered8, "Technology")}
//                   onMouseEnter={() => {
//                     setIsHovered8(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovered8(false);
//                   }}
//                   onClick={() => {
//                     setIsActive("Technology");
//                   }}
//                 >
//                   Technology
//                 </Link>
//               </li>
//             </ul>
//             <button
//               style={buttonStyle()}
//               onClick={props.toggleMode}
//               onMouseEnter={() => {
//                 setIsHovered(true);
//               }}
//               onMouseLeave={() => {
//                 setIsHovered(false);
//               }}
//             >
//               {props.mode === "light" ? (
//                 <i className="fa-solid fa-moon"></i>
//               ) : (
//                 <i className="fa-solid fa-sun"></i>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="relative bg-gray-800 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link to="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white dark:bg-gray-950/50">General</Link>
            <Link to="/business" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Business</Link>
            <Link to="/entertainment" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Entertainment</Link>
            <Link to="/health" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Health</Link>
            <Link to="/science" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Science</Link>
            <Link to="/sports" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Sports</Link>
            <Link to="/technology" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Technology</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:hover:text-white">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <el-dropdown className="relative ml-3">
          <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          </button>

          <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden dark:text-gray-300 dark:focus:bg-white/5">Your profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden dark:text-gray-300 dark:focus:bg-white/5">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden dark:text-gray-300 dark:focus:bg-white/5">Sign out</a>
          </el-menu>
        </el-dropdown>
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white dark:bg-gray-950/50">Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
    </div>
  </el-disclosure>
</nav>
    </>
  )
}

export default Navbar;