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
import reco from '../../shared/assets/reco.svg'
import {useRecoilValue} from "recoil";
import {appServicesAtom} from "@/entities/atoms/app-services.ts";
import {
    Pagination,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {PaginationContent} from "@/components/ui/pagination.tsx";
import {useState} from "react";

export const Table = () => {
    const [page, setPage] = useState(0);
    const { data } = useAppServices({ page });

    const paginationItems = [page, page + 1, page + 2];

    console.log({ data })

    return (
        <div className="flex flex-col w-full gap-6">
        <TableComponent className="flex-3 bg-primary text-white">
            {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
            <TableHeader className="bg-accent border-10 border-background h-16">
                <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Category</TableHead>
                    <TableHead className="text-white">Connection</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((row) => (
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


            <Pagination className="text-white">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => setPage(page && page - 1)} />
                    </PaginationItem>
                    {paginationItems.map((num) => (
                        <PaginationItem>
                            <PaginationLink isActive={num === page} onClick={() => setPage(num)}>{num}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}