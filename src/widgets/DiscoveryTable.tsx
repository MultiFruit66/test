import {Table} from "@/features/discovery/Table.tsx";
import {Filters} from "@/features/discovery/Filters.tsx";


export const DiscoveryTable = () => {
    return (
        <div className="flex gap-2 m-6">
            <Table />
            <Filters />
        </div>
    )
}