import {useEffect, useState} from "react";
import type {AppService} from "@/entities/types/app-service.ts";


export const useAppServices = ({ page = 0 }) => {
    const [data, setData] = useState<AppService[] | null>(null);
    // const setRecoilState = useSetRecoilState(appServicesAtom);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://recotest.pythonanywhere.com/api/v1/app-service/get-apps", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        pageNumber: page,
                        pageSize: 25,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setData(json.appRows);
                // setRecoilState((data) => [...json.appRows])
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}