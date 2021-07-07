import React from "react";
import {id} from '../../../App'
import {getEmployee} from '../../../graphql/queries'
import {API,graphqlOperation} from 'aws-amplify';
import './header.css';
// reactstrap components
import { 
  // Button,
   Container,
    Row,
     Col
     } from "reactstrap";

const UserHeader = () => {
  const [name,setName]=React.useState('');
const getEmp=async()=>{
const data=await API.graphql(graphqlOperation(getEmployee,{id:id[id.length-1]}))
 setName(data.data.getEmployee.full_name);
}
 React.useEffect(()=>{
getEmp();
 },[])
  return (
    <>
      <div
        className="header bg-gradient-info pb-8 pt-5 pt-md-8"
      >
        {/* Mask */}
        {/* <span className="mask bg-gradient-info opacity-4" /> */}
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="5" md="10">
              <h1 className="display-3 text-white ">Welcome {name}</h1>
              <p className="text-white mt-0 mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam deleniti exercitationem illo nobis modi dolore mollitia id dolor quibusdam!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
