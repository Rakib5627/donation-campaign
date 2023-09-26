import { NavLink } from 'react-router-dom';
import headerLogo from '../../assets/Logo.png'

const Header = () => {

  const links = <>

    <li><NavLink to="/" style={({ isActive }) => { return { color: isActive ? "red" : "", textDecorationLine: isActive ? "underline" : "" } }}>Home</NavLink></li>

    <li><NavLink to="/donation" style={({ isActive }) => {
      return {
        color: isActive ? "red" : "",
        textDecorationLine: isActive ? "underline" : ""
      }
    }}>Donation</NavLink></li>

    <li><NavLink to="/statistics" style={({ isActive }) => {
      return {
        color: isActive ? "red" : "",
        textDecorationLine: isActive ? "underline" : ""
      }
    }}>Statistics</NavLink></li>

  </>


  return (
    <div className="flex flex-col md:flex-row bg-base-100 justify-between ">
      <div className="mb-5 ">
        <img src={headerLogo} alt="" />
      </div>
      <div className="">
        <ul className="flex gap-4 font-normal text-gray-600">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;