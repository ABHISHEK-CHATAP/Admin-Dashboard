//npm i react-table
// and need to install types [dev depensencies me rakhenge]
//npm i --save-dev @types/react-table

// HOF => woh hota hai jo function return kre
// HOC => woh hota hai jo component return kre

import { useTable, Column, TableOptions,useSortBy,usePagination } from "react-table";

// type Temp ={
//     status: string;
//     id: string;
//     amount: number;
// };

{/* <T> as genericuse kia hai istead of define type Temp={} */}

function TableHOC<T extends object>( columns: Column<T>[], data:T[], containerClassnames: string, heading: string) {

  return function HOC() {

    const options:TableOptions<T>={
     columns,
     data
    //  key and value same hai 
    }

  const table = useTable(options,useSortBy);
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = table;

    return (
        <>
        <div className={containerClassnames}>
         <h2 className="heading">{heading}</h2>

         <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup,id)=>{
                    return(
                        <>
                        <tr {...headerGroup.getFooterGroupProps()} key={id}>
                            {headerGroup.headers.map((col:any)=>{
                                return(
                                    <>
                                    <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                                        {col.render("Header")} {" "}
                                        {
                                            col.isSorted && (
                                                <span>{col.isSortedDesc ? "⬇️" : "⬆️"}</span>
                                            )
                                        }
                                    </th>
                                    </>
                                )
                            })}
                        </tr>
                        </>
                    )
                })}
            </thead>

            <tbody {...getTableBodyProps}>
             {
                rows.map((row)=>{
                    prepareRow(row);
                    return(
                        <>
                        <tr {...row.getRowProps()}>
                         {row.cells.map((cell)=>{
                            return(
                                <>
                                <td {...cell.getCellProps()}>
                                 {cell.render("Cell")}
                                </td>
                                </>
                            )
                         })}
                        </tr>
                        </>
                    )
                })
             }
            </tbody>
         </table>
        </div>
        
        </>
    )
  };
}




export default TableHOC
