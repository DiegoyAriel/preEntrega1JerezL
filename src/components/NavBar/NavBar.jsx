import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
        <ul>
          <li><a href="" className="menu">Products</a></li>
          <li><a href="" className="menu">Us</a></li>
          <li><a href="index.html" className="logo">Alexis Store</a></li> 
          <li><a href="" className="menu">Contact</a></li>
          <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default NavBar