/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";

class Dashboard extends React.Component {
  constructor(){
    super()
    this.state={
      data:null
    }
  }

  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers(){
    console.log('fetch users')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>this.setState({data}))
  }

  render() {
    const tableData = this.state.data && this.state.data.map((user,i)=>(
      <tr key={i}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td className="">{user.phone}</td>
      </tr>
    ))
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card style={{height:'80vh'}} >
                <CardHeader>
                  <CardTitle tag="h5">Users' Data</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                      <thead className="text-primary">
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th className="">Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData}
                      </tbody>
                      <tfoot>

                      </tfoot>
                  </Table>
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
