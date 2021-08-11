///packages used in this program 
import React from "react";
import {API,graphqlOperation} from "aws-amplify";
import {listLeaves} from '../../../graphql/queries'
import {useHistory} from 'react-router'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//importing id from app
import {id} from '../../../App'
import {getEmployee} from '../../../graphql/queries'
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";
//LeadLeaveTables strated form here
const LeadLeaveTables = () => {
//assigning userId
const userId = id[id.length-1];
//useState hooks used in this program
const [leaveResult,setLeaveResult] = React.useState([]);
const [empName,setEmpName]= React.useState('');
const history=useHistory();
const [getLeaves,setGetLeaves]=React.useState([]);
//function for fetching leave record from database
const fetchData= async ()=>{
try{
    const data=await API.graphql(graphqlOperation(getEmployee,{id:userId}))
    const empData = data.data.getEmployee.full_name;
    setEmpName(empData);
 const LeavesData = await API.graphql(graphqlOperation(listLeaves))
 const Ldata = LeavesData.data.listLeaves.items;
  //function for comparing data and arranging it in ascending order
 const compare=(a,b)=>{
   if(a.createdAt>b.createdAt){
     return -1;
   }
   if(a.createdAt>b.createdAt){
return 1;
   }
   return 0;
 }
 //sorting function
 Ldata.sort(compare);
 //storing sorted leaves in getLeaves hook
 setGetLeaves(Ldata);
  }
  catch(error){
    console.log('error on fetching data',error);
  }
}
//useEffect hook for fetching leave data at the begining of program
React.useEffect(()=>{
fetchData();
},[])
//handling edit
const handleEdit=(id,Approval)=>{
  if(Approval==='pending')
  {
history.push(`/leadLeaveEdit/${id}`)
  }
  else{
   window.alert('you can not edit after Hr approval/rejection');
  }
}
//useEffect hook for filtering leave records on the basis of applicant supervisor
React.useEffect(()=>{
const result = getLeaves.filter((leave)=>leave.supervisor.toLowerCase()===empName.toLowerCase());
setLeaveResult(result);
},[getLeaves])
//useEffect hook for notification on new leave arrival
React.useEffect(()=>{
  if(localStorage.getItem('leaves')<leaveResult.length){
toast.success(`${leaveResult[0].full_name} is applied for leave`,{
  position: "top-right",
  autoClose: false,
hideProgressBar: true
});
//storing number of leaves in localStorage for notification purpose
  localStorage.setItem('leaves',leaveResult.length);
  }
  if(leaveResult.length>0 &&  localStorage.getItem('leaves')>leaveResult.length ){
      localStorage.setItem('leaves',leaveResult.length);
  }
 console.log(localStorage.getItem('leaves'));
},[leaveResult]);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--5" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Leaves Record</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Leave</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Hr Approval</th>
                    <th scope="col">Lead Approval</th>
                    <th scope="col">Remarks</th>
                     <th scope="col">Type</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                 leaveResult.map((leave,i)=>{
              return (<>   
               <tr key={i}>
                    {/* <td>{leave.id}</td> */}
                    {/* <td>{leave.employee_id}</td> */}
                    <td>{leave.employee.full_name}</td>
                    <td>{leave.leave}</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        {leave.from}
                      </Badge>
                    </td>
                    <td>{leave.to}</td>
                    <td>{leave.Hr_Approval}</td>
                    <td>{leave.Lead_Approval}</td>
                    <td>{leave.remarks}</td>
                    <td>{leave.type}</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => handleEdit(leave.id,leave.Hr_Approval)}
                          >
                             Edit
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  </>
              )
                 })
                     }
                </tbody>
              </Table>
              <CardFooter className="py-4">
              </CardFooter>
            </Card>
          </div>
        </Row>   
      </Container>
      <ToastContainer/>
    </>
  );
};

export default LeadLeaveTables;
