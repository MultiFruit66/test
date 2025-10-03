import {Navigation} from "@/features/Navigation.tsx";
import logo from "../shared/assets/logo.svg"

export const Sidebar = () => {
    return (
        <aside className="w-48 h-dvh bg-primary text-white p-4 py-2 uppercase">
            <img src={logo} alt="Logo" className="w-24 mb-6" />
            <Navigation />
        </ aside>
    )
}