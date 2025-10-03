import {Link} from "react-router-dom";

export const Navigation = () => {
    const navigationItems = [
        { label: 'Apps Discovery', href: '/' },
        { label: 'Apps Inventory', href: '/inventory' },
        { label: 'Apps Settings', href: '/settings' },
    ]

    return (
        <nav>
            <ul>
                {navigationItems.map(({ label, href }) => (
                    <li key={label}>
                        <Link to={{pathname: href}}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}