import {Link, useLocation} from "react-router-dom";

export const Navigation = () => {
    const { pathname } = useLocation();

    const navigationItems = [
        { label: 'Apps Discovery', href: '/' },
        { label: 'Apps Inventory', href: '/inventory' },
        { label: 'Apps Settings', href: '/settings' },
    ]

    return (
        <nav className="">
            <ul>
                {navigationItems.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <li key={label} className={`border-l-2 py-1 ${isActive ? 'border-secondary' : 'border-primary'}`}>
                            <Link to={{pathname: href}} className="p-2">
                                {label}
                            </Link>
                        </li>
                    )})}
            </ul>
        </nav>
    )
}