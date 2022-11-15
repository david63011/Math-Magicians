import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar () {
    return (
        <nav className="nav">
        <h1 className= "title">Math Magicians</h1>
        <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/calculator">Calculator</CustomLink>
        <CustomLink to="/quote">Quote</CustomLink>
        </ul>
       </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath= useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className= {match ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    );
}