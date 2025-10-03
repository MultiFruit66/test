import {Sidebar} from "@/widgets/Sidebar.tsx";
import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <div className="flex bg-background">
            <Sidebar />
            <main className="w-full">{children}</main>
        </div>
    )
}