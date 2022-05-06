import React from "react"
import CartWidget from "../Cartwidget/index"

export default function Navbar(){
    const ulStyles = {
        display : "flex",
        listStyleType: "none",
        position : "relative",
        left: "80%",
    }
    const liStyles ={
        padding : "3px"
    }
    const navStyles = {
        backgroundColor : "lightgrey",
    }
    return(
        <header className = "header">
           
            <nav className="navbar" style={navStyles}>
                <ul className="ul" style={ulStyles}>
                    <li style={liStyles}>Inicio</li>
                    <li style={liStyles}>Productos</li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}