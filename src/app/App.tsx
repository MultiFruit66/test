import {RouterProvider} from "react-router/dom";
import {router} from "@/app/router.tsx";
import {RecoilRoot} from "recoil";
import {Fallback} from "@/widgets/Fallback.tsx";
import { ErrorBoundary } from "react-error-boundary";


function App() {
    return (
        <ErrorBoundary fallback={<Fallback />}>
            <RecoilRoot>
                <RouterProvider router={router} />
            </RecoilRoot>
        </ErrorBoundary>
    )
}

export default App