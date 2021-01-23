import React from 'react'
import {useTable, useGlobalFilter, usePagination} from 'react-table';
import {useMemo} from 'react'
import { COLUMNS } from './ColumnsComp';
import DATA from '/Users/lukas/Desktop/phelion/src/data.json'
import { Container, Table, Row, Col } from 'react-bootstrap';
import GlobalFilterComp from './GlobalFilterComp';

export const PadTable = () => {
    
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> DATA, [])

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
    }, useGlobalFilter,usePagination)

    const { globalFilter, pageIndex, pageSize} = state

    return (
        <Container fluid>
            <Row>
                <Col>
                <GlobalFilterComp filter={globalFilter} setFilter={setGlobalFilter}/>
                    <Table bg-primary striped bordered hover {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) =>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                                ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                page.map(row => {
                                    prepareRow(row)
                                    return(
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell)=> {
                                                return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
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
                <Col md={{ span: 4, offset: 4 }} className="px-2">
                                <span>
                                    Page{' '}
                                    <strong>
                                        {pageIndex + 1} of {pageOptions.length} 
                                    </strong>
                                </span>
                                <select 
                                value={pageSize} 
                                onChange={e=> setPageSize(Number(e.target.value))}>
                                    {
                                        [10,20,50,100].map(pageSize => (
                                            <option key={pageSize} value={pageSize}>
                                                Show {pageSize}
                                            </option>
                                        ))
                                    }
                                </select>
                            <button onClick={() =>previousPage()} disabled={!canPreviousPage}>Previous</button>
                            <button onClick={() =>nextPage()} disabled={!canNextPage}>Next</button>
                </Col>
             </Row>
        
    </Container>
    )
}
export default PadTable;