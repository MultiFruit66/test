import { createBrowserRouter } from "react-router";
import {DiscoveryPage} from "@/pages/Discovery.tsx";
import {InventoryPage} from "@/pages/Inventory.tsx";
import {SettingsPage} from "@/pages/Settings.tsx";
import {MainLayout} from "@/app/layouts/MainLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout><DiscoveryPage /></MainLayout>,
    },
    {
        path: "/inventory",
        element: <MainLayout><InventoryPage /></MainLayout>,
    },
    {
        path: "/settings",
        element: <MainLayout><SettingsPage /></MainLayout>,
    },
]);
