import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>
{
 return (
    <nav>
        <h3>E-commerce.</h3>
        <div>
            <button>Veganos</button>
            <button>Vegetarianos</button>
            <button>Sin Tacc</button>
        </div>
        <CartWidget/>
    </nav>

)

}

export default NavBar;