import React from "react";
import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
        const location = useLocation();
        const paths = location.pathname.split("/").filter((path) => path);
      
        return (
            <span className='font-face'>
                <div className="breadcrumb">
                    {paths.map((path, index) => (                   
                        <nav key={index} className="breadcrumb-nav">
                        <Link to={`/${paths.slice(0, index + 1).join("/")}`} className="breadcrumb-link">
                            {path } /
                        </Link>
                        </nav>
                    ))}           
                 </div>
            </span>           
        );           
}

export default Breadcrumb