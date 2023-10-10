import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>
{
 return (
    <nav className="navbar bg-dark text-light mb-5">
        <div className="container-fluid">
        <h3 className="col">E-commerce Healthy Market.</h3>
        <div className="col d-flex justify-content-evenly" >
            <button className="btn btn-primary">Veganos</button>
            <button className="btn btn-secondary">Vegetarianos</button>
            <button className="btn btn-primary">Sin Tacc</button>
        </div>
        <div className="col">
        <CartWidget/>
        </div>
       
        </div>
        
    </nav>

)

}

export default NavBar;