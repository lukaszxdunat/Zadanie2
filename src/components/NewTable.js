import React from 'react'
import {useTable, useGlobalFilter, usePagination, useSortBy} from 'react-table';
import {useMemo} from 'react'
import { COLUMNS } from './ColumnsComp';
import DATA from '/Users/lukas/Desktop/phelion/src/data.json'
import { Container, Table, Row, Col } from 'react-bootstrap';
import GlobalFilterComp from './GlobalFilterComp';

export const NewTable = () => {
    
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> DATA, [])

 {/*     Deklaracja zmiennych */}

    const {getTableProps, 
        getTableBodyProps, 
        headerGroups,
        footerGroups,
        page, 
        prepareRow,
        state,
        nextPage,
        canNextPage,
        canPreviousPage,
        previousPage,
        pageOptions,
        setGlobalFilter,
        setPageSize,
    } = useTable({
        columns,
        data,
    }, useGlobalFilter,useSortBy,usePagination)

    const { globalFilter, pageIndex, pageSize} = state

    return (
    // Generowanie kontynera
        <Container fluid>
            <Row>
                <Col>
                {/* Wywołanie funkcji umożliwiającej szukanie */}
                <GlobalFilterComp filter={globalFilter} setFilter={setGlobalFilter}/>
                    {/* Generowanie tabeli */}
                    <Table striped bordered hover {...getTableProps()}>
                        {/* Generowanie nagłówka tabeli */}
                        <thead>
                            {headerGroups.map((headerGroup) =>(
                            <tr {...headerGroup.getHeaderGroupProps()} >
                                {headerGroup.headers.map((column)=>(
                                    // Renderowanie nagłówka wraz z możliwością sortowania
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '⬆' : '⬇' ) :''}
                                    </span>
                                    </th>
                                ))}
                            </tr>
                                ))}
                        </thead>
                        {/* Generowanie ciała tabeli */}
                        <tbody {...getTableBodyProps()}>
                            {
                                page.map(row => {
                                    prepareRow(row)
                                    return(
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell)=> {
                                                // Renderowanie komórki tabeli
                                                return  <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                         {/* Generowanie stopki tabeli */}
                      
                        <tfoot>
                            {
                                footerGroups.map(footerGroup=>(
                                    <tr {...footerGroup.getFooterGroupProps()}>
                                            {footerGroup.headers.map(column => (
                                                <td{...column.getFooterProps}>{column.render('Footer')}</td>
                                            ))}
                                    </tr>
                                ))
                            }
                        </tfoot>
                    </Table>
                 </Col>
            </Row>

            <Row>
                <Col md={{ span: 4, offset: 4 }} className="p-2">
                             {/*  Wyświetlanie aktualnej strony*/}
                                <span>
                                    Strona{' '}
                                    <strong>
                                        {pageIndex + 1} z {pageOptions.length} 
                                    </strong>
                                </span>
                                   {/* Lista umożliwiająca wyswietlanie okreslonej liczby wierszów w tabeli */}
                                
                                <select 
                                value={pageSize} 
                                onChange={e=> setPageSize(Number(e.target.value))}>
                                    {
                                        [10,20,50,100].map(pageSize => (
                                            <option key={pageSize} value={pageSize}>
                                                Pokaż {pageSize}
                                            </option>
                                        ))
                                    }
                                </select>
                                 {/* Przyciski do przewijania strony  */}
                          
                            <button onClick={() =>previousPage()} disabled={!canPreviousPage}>Poprzednia strona</button>
                            <button onClick={() =>nextPage()} disabled={!canNextPage}>Następna strona</button>
                </Col>
             </Row>
        
    </Container>
    )
}
export default NewTable;