import { createBrowserRouter } from "react-router";
import {DiscoveryPage} from "@/pages/Discovery.tsx";
import {InventoryPage} from "@/pages/Inventory.tsx";
import {SettingsPage} from "@/pages/Settings.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DiscoveryPage />,
    },
    {
        path: "/inventory",
        element: <InventoryPage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
]);
