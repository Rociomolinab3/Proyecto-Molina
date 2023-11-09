import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/Healthy (1).png"
import style from '../NavBar/NavBar.module.css'

const NavBar = () =>
{
 return (
    <nav className="navbar bg-dark text-light mb-4" >
        <div className="container-fluid" style={{ marginBottom: "-16px" }}>
        <h3 className="col d-flex align-items-center">
          <img src={logoIcon} alt="Logo" className="mr-2" width="400px" height="110px"/> 
        </h3>
        {/* <h3 className="col">E-commerce Healthy Market.</h3> */}
        <div className="col d-flex justify-content-evenly" >
        <div>
        <NavLink to={"/"} className={style.navLink}>TODOS </NavLink>
        </div>
        <div>
        <NavLink to={"/category/vegano"} className={style.navLink }> VEGANOS </NavLink>
        </div>
        <div>
        <NavLink to={"/category/glutenfree"} className={style.navLink}> GLUTEN FREE</NavLink>
        </div>
        
            {/* <button className="btn btn-primary">Veganos</button>
            <button className="btn btn-secondary">Vegetarianos</button>
            <button className="btn btn-primary">Sin Tacc</button> */}
        </div>
        <div className="col">
        <CartWidget/>
        </div>
       
        </div>
        
    </nav>

)

}

export default NavBar;