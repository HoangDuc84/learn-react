
import "../conponents/Cot.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink  to="/home">
        Home
      </NavLink>

      <NavLink  to="/new">
        New
      </NavLink>

      <NavLink  to="/blog">
        Blog
      </NavLink>

      <NavLink  to="/dropdown">
        Dropdown
      </NavLink>
    </div>
  );
};

export default Nav;

// import { Link, NavLink } from "react-router-dom";

// const Nav = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand active" to="/home">
//           Home
//         </NavLink>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link active" aria-current="page" to="/new">
//                 New
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/blog">
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <NavLink
//                 className="nav-link dropdown-toggle"

//               >
//                 Dropdown
//               </NavLink>

//             </li>

//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
