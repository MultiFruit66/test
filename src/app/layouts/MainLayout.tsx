import {Sidebar} from "@/widgets/Sidebar.tsx";
import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Sidebar />
            <main>{children}</main>
        </>
    )
}