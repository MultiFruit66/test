import {
    TableBody,
    TableCaption,
    Table as TableComponent,
    TableHead,
    TableHeader,
    TableRow,
    TableCell
} from "@/components/ui/table.tsx";
import {useAppServices} from "@/shared/hooks/discovery/useAppServices.ts";
import type {AppService} from "@/entities/app-service.ts";
import reco from '../../shared/assets/reco.svg'

export const Table = () => {
    const { data } = useAppServices();
    console.log({ data })

    return (
        <TableComponent className="flex-3 bg-primary text-white">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-accent border-10 border-background h-16">
                <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Category</TableHead>
                    <TableHead className="text-white">Connection</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {(data?.appRows as AppService[])?.map((row) => (
                    <TableRow key={row.appId} className={"border-10 border-background h-16"}>
                        <TableCell>{row.appName}</TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>
                            <div className="flex align-baseline">
                                <img src={reco} alt="Reco" />
                                <span className="m-2">Reco</span>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableComponent>
    )
}