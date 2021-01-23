import React from 'react';
import { button,Row,Col, Table, Container } from 'react-bootstrap';
import employee from '/Users/lukas/Desktop/phelion/src/data.json';


export function TableComp(props) {
  const {item}=props;
  // const [sortedField, setSortedField] = React.useState(null);
  // let sortedProducts = [item];
  // if (sortedField !== null) {
  //   sortedProducts.sort((a, b) => {
  //     if (a[sortedField] < b[sortedField]) {
  //       return -1;
  //     }
  //     if (a[sortedField] > b[sortedField]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
// }

  return (
    <Container fluid>
      <Row>
        <Col>
              <Table striped bordered hover>
                  <thead>
                      <tr>
                        <th>
                         Identyfikator  
                          </th>
                        <th>
                              Tytuł
                        </th>
                        <th>Autor  <input type="search" className="search form-control" placeholder="Search here"></input></th>
                        <th>Cena  <input type="search" className="search form-control" placeholder="Search here"></input></th>
                        <th>Typ <input type="search" className="search form-control" placeholder="Search here"></input></th>
                        <th>status  <input type="search" className="search form-control" placeholder="Search here"></input></th>
                      </tr>

                  </thead>

                    {employee.map((item) =>(
                      <tbody>
                      <tr key={item.id}>
                      <td>{item.ident}</td>
                      <td>{item.tytul}</td>
                      <td>{item.autor}</td>
                      <td>{item.cena}</td>
                      <td>{item.typ}</td>
                      <td>{item.status}</td>
                    </tr>
                    </tbody>
              ))}
          </Table>
        </Col>
      </Row>

   </Container>
  );
}
export default TableComp;