import React from 'react'
import { Form,Col, Button,Row } from "react-bootstrap";
import {API,graphqlOperation} from "aws-amplify";
import {getEvaluation} from '../../../graphql/queries'
import {useParams} from 'react-router'
import {useHistory} from 'react-router'


const ViewEvaluationForm=()=> {
  const history=useHistory();
  const {evaId,id}=useParams();
const [data,setData] = React.useState({});

const getEmp=async ()=>{
const empData = await API.graphql(graphqlOperation(getEvaluation,{id:evaId}));
setData(empData.data.getEvaluation);
}
React.useEffect(()=>{
getEmp();
},[])

const clickHandler=()=>{
  history.push(`/user/${id}`)
}


    return (   <div > 
       
         <div id="role-form-outer-div" className="mx-5 p-5">
          <Form id="form" style={{border:'1px solid gray',padding:'4px'}} >
             <h1 id="role-form-title" className=" mb-4 px-1">Employee Evaluation Form</h1>
            <Form.Group as={Row}>
              <Form.Label column sm={2} >
              Reviewer Name 
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name='employee_Id'
                  placeholder="Employee Id"
                  value={data.reviewer_name}
                //  onChange={(e)=>setData({...data,reviewer_name:e.target.value})}
                  required
                  disabled
                />
              </Col>
            </Form.Group>
              <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Reviewer Title
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name='employee_Id'
                  placeholder="Title"
                 value={data.reviewer_title}
                //  onChange={(e)=>setData({...data,reviewer_title:e.target.value})}
                  required 
                  disabled
                />
              </Col>
            </Form.Group>
              <Form.Group as={Row}>
            <Form.Label column sm={2}>
             Employee Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name='employee_Id'
                  placeholder="Employee Id"
                  value={data.employee_name}
                //onChange={(e)=>setData({...data,employee_name:e.target.value})}
                  required
                  disabled
                />
              </Col>
            </Form.Group>
              <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Reviewing date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name='employee_Id'
                  placeholder="Employee Id"
                 value={data.reviewing_date}
                //onChange={(e)=>setData({...data,reviewing_date:e.target.value})}
                  required
                  disabled
                />
              </Col>
            </Form.Group>
                      <h3 class = 'bg-gray text-center my-5 text-white' sm={12}>Productivity</h3>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Make realistic goals :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="one"
                  checked={data.q_one==='Unsatisfactory'}
                  // onChange={()=>setData({...data,one:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_one==='Inconsistent'}
                  name="one"
                  // onChange={()=>setData({...data,one:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_one==='Proficient'}
                  name="one"
                // onChange={()=>setData({...data,one:'Proficient'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_one==='effective'}
                  name="one"
                  //  onChange={()=>setData({...data,one:'effective'})}
                  required
                />
                <Form.Check
              className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_one==='Exceptional'}
                  name="one"
                  // onChange={()=>setData({...data,one:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Meet deadlines :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="two"
                  checked={data.q_two==='Unsatisfactory'}
                  // onChange={()=>setData({...data,two:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_two==='Inconsistent'}
                  name="two"
                  // onChange={()=>setData({...data,two:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_two==='Proficient'}
                  name="two"
                // onChange={()=>setData({...data,two:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_two==='effective'}
                  name="two"
                  //  onChange={()=>setData({...data,two:'effective'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_two==='Exceptional'}
                  name="two"
                  // onChange={()=>setData({...data,two:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Knowledge of work :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="three"
                  checked={data.q_three==='Unsatisfactory'}
                  // onChange={()=>setData({...data,three:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_three==='Inconsistent'}
                  name="three"
                  // onChange={()=>setData({...data,three:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_three==='Proficient'}
                  name="three"
                // onChange={()=>setData({...data,three:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_three==='effective'}
                  name="three"
                  //  onChange={()=>setData({...data,three:'effective'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_three==='Exceptional'}
                  name="three"
                  // onChange={()=>setData({...data,three:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Code quality :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                  inline
                  className='mx-4'
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="four"
                  checked={data.q_four==='Unsatisfactory'}
                  // onChange={()=>setData({...data,four:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_four==='Inconsistent'}
                  name="four"
                  // onChange={()=>setData({...data,four:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_four==='Proficient'}
                  name="four"
                // onChange={()=>setData({...data,four:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_four==='effective'}
                  name="four"
                  //  onChange={()=>setData({...data,four:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_four==='Exceptional'}
                  name="four"
                  // onChange={()=>setData({...data,four:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Code reviews :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="five"
                  checked={data.q_five==='Unsatisfactory'}
                  // onChange={()=>setData({...data,five:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_five==='Inconsistent'}
                  name="five"
                  // onChange={()=>setData({...data,five:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_five==='Proficient'}
                  name="five"
                // onChange={()=>setData({...data,five:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_five==='effective'}
                  name="five"
                  //  onChange={()=>setData({...data,five:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_five==='Exceptional'}
                  name="five"
                  // onChange={()=>setData({...data,five:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Find realistic solutions :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="six"
                  checked={data.q_six==='Unsatisfactory'}
                  // onChange={()=>setData({...data,six:'Unsatisfactory'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_six==='Inconsistent'}
                  name="six"
                  // onChange={()=>setData({...data,six:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_six==='Proficient'}
                  name="six"
                // onChange={()=>setData({...data,six:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_six==='effective'}
                  name="six"
                  //  onChange={()=>setData({...data,six:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_six==='Exceptional'}
                  name="six"
                  // onChange={()=>setData({...data,six:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <h3 class = 'bg-gray text-center my-5 text-white' sm={12}>Communication</h3>
                        <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Verbal communication :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                  inline
                  className='mx-4'
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="seven"
                  checked={data.q_seven==='Unsatisfactory'}
                  // onChange={()=>setData({...data,seven:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_seven==='Inconsistent'}
                  name="seven"
                  // onChange={()=>setData({...data,seven:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_seven==='Proficient'}
                  name="seven"
                // onChange={()=>setData({...data,seven:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_seven==='effective'}
                  name="seven"
                  //  onChange={()=>setData({...data,seven:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_seven==='Exceptional'}
                  name="seven"
                  // onChange={()=>setData({...data,seven:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Written communication (reports/documentation):
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="eight"
                  checked={data.q_eight==='Unsatisfactory'}
                  // onChange={()=>setData({...data,eight:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_eight==='Inconsistent'}
                  name="eight"
                  // onChange={()=>setData({...data,eight:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_eight==='Proficient'}
                  name="eight"
                // onChange={()=>setData({...data,eight:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_eight==='effective'}
                  name="eight"
                  //  onChange={()=>setData({...data,eight:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_eight==='Exceptional'}
                  name="eight"
                  // onChange={()=>setData({...data,eight:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Processes received information :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="nine"
                  checked={data.q_nine==='Unsatisfactory'}
                  // onChange={()=>setData({...data,nine:'Unsatisfactory'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_nine==='Inconsistent'}
                  name="nine"
                  // onChange={()=>setData({...data,nine:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_nine==='Proficient'}
                  name="nine"
                // onChange={()=>setData({...data,nine:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_nine==='effective'}
                  name="nine"
                  //  onChange={()=>setData({...data,nine:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_nine==='Exceptional'}
                  name="nine"
                  // onChange={()=>setData({...data,nine:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
        <h3 class = 'bg-gray text-center my-5 text-white' sm={12}>Various</h3>
                           <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Ability to work independently :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="ten"
                  checked={data.q_ten==='Unsatisfactory'}
                  // onChange={()=>setData({...data,ten:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_ten==='Inconsistent'}
                  name="ten"
                  // onChange={()=>setData({...data,ten:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_ten==='Proficient'}
                  name="ten"
                // onChange={()=>setData({...data,ten:'Proficient'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_ten==='effective'}
                  name="ten"
                  //  onChange={()=>setData({...data,ten:'effective'})}
                  required
                />
                <Form.Check
              className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_ten==='Exceptional'}
                  name="ten"
                  // onChange={()=>setData({...data,ten:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Willingness to take on additional responsibilities :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="eleven"
                  checked={data.q_eleven==='Unsatisfactory'}
                  // onChange={()=>setData({...data,eleven:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_eleven==='Inconsistent'}
                  name="eleven"
                  // onChange={()=>setData({...data,eleven:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_eleven==='Proficient'}
                  name="eleven"
                // onChange={()=>setData({...data,eleven:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_eleven==='effective'}
                  name="eleven"
                  //  onChange={()=>setData({...data,eleven:'effective'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_eleven==='Exceptional'}
                  name="eleven"
                  // onChange={()=>setData({...data,eleven:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Reliability (punctuality, attendance) :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="twelve"
                  checked={data.q_twelve==='Unsatisfactory'}
                  // onChange={()=>setData({...data,twelve:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_twelve==='Inconsistent'}
                  name="twelve"
                  // onChange={()=>setData({...data,twelve:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_twelve==='Proficient'}
                  name="twelve"
                // onChange={()=>setData({...data,twelve:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_twelve==='effective'}
                  name="twelve"
                  //  onChange={()=>setData({...data,twelve:'effective'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_twelve==='Exceptional'}
                  name="twelve"
                  // onChange={()=>setData({...data,twelve:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Change orientation :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                  inline
                  className='mx-4'
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="thirteen"
                  checked={data.q_thirteen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,thirteen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_thirteen==='Inconsistent'}
                  name="thirteen"
                  // onChange={()=>setData({...data,thirteen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_thirteen==='Proficient'}
                  name="thirteen"
                // onChange={()=>setData({...data,thirteen:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_thirteen==='effective'}
                  name="thirteen"
                  //  onChange={()=>setData({...data,thirteen:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_thirteen==='Exceptional'}
                  name="thirteen"
                  // onChange={()=>setData({...data,thirteen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Employee engagement :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="fourteen"
                  checked={data.q_fourteen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,fourteen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_fourteen==='Inconsistent'}
                  name="fourteen"
                  // onChange={()=>setData({...data,fourteen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_fourteen==='Proficient'}
                  name="fourteen"
                // onChange={()=>setData({...data,fourteen:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_fourteen==='effective'}
                  name="fourteen"
                  //  onChange={()=>setData({...data,fourteen:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_fourteen==='Exceptional'}
                  name="fourteen"
                  // onChange={()=>setData({...data,fourteen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Decision Making power :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="fifteen"
                  checked={data.q_fifteen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,fifteen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_fifteen==='Inconsistent'}
                  name="fifteen"
                  // onChange={()=>setData({...data,fifteen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_fifteen==='Proficient'}
                  name="fifteen"
                // onChange={()=>setData({...data,fifteen:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_fifteen==='effective'}
                  name="fifteen"
                  //  onChange={()=>setData({...data,fifteen:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_fifteen==='Exceptional'}
                  name="fifteen"
                  // onChange={()=>setData({...data,fifteen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
                        <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Planning and organizing :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="sixteen"
                  checked={data.q_sixteen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,sixteen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_sixteen==='Inconsistent'}
                  name="sixteen"
                  // onChange={()=>setData({...data,sixteen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_sixteen==='Proficient'}
                  name="sixteen"
                // onChange={()=>setData({...data,sixteen:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_sixteen==='effective'}
                  name="sixteen"
                  //  onChange={()=>setData({...data,sixteen:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_sixteen==='Exceptional'}
                  name="sixteen"
                  // onChange={()=>setData({...data,sixteen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
               Integrity and ethical management :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="seventeen"
                  checked={data.q_seventeen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,seventeen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_seventeen==='Inconsistent'}
                  name="seventeen"
                  // onChange={()=>setData({...data,seventeen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_seventeen==='Proficient'}
                  name="seveteen"
                // onChange={()=>setData({...data,seventeen:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_seventeen==='effective'}
                  name="seventeen"
                  //  onChange={()=>setData({...data,seventeen:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_seventeen==='Exceptional'}
                  name="seventeen"
                  // onChange={()=>setData({...data,seventeen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
             <h3 class = 'bg-gray text-center my-5 text-white' sm={12}>Personal Development</h3>
              <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Set challenging goals :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="eighteen"
                  checked={data.q_eighteen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,eighteen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_eighteen==='Inconsistent'}
                  name="eighteen"
                  // onChange={()=>setData({...data,eighteen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_eighteen==='Proficient'}
                  name="eighteen"
                // onChange={()=>setData({...data,eighteen:'Proficient'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_eighteen==='effective'}
                  name="eighteen"
                  //  onChange={()=>setData({...data,eighteen:'effective'})}
                  required
                />
                <Form.Check
              className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_eighteen==='Exceptional'}
                  name="eighteen"
                  // onChange={()=>setData({...data,eighteen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Actively seeks and promotes innovative ways of working :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="nineteen"
                  checked={data.q_nineteen==='Unsatisfactory'}
                  // onChange={()=>setData({...data,nineteen:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_nineteen==='Inconsistent'}
                  name="nineteen"
                  // onChange={()=>setData({...data,nineteen:'Inconsistent'})}
                  required
                />
                 <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_nineteen==='Proficient'}
                  name="nineteen"
                // onChange={()=>setData({...data,nineteen:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_nineteen==='effective'}
                  name="nineteen"
                  //  onChange={()=>setData({...data,nineteen:'effective'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_nineteen==='Exceptional'}
                  name="nineteen"
                  // onChange={()=>setData({...data,nineteen:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Self-development :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="twenty"
                  checked={data.q_twenty==='Unsatisfactory'}
                  // onChange={()=>setData({...data,twenty:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_twenty==='Inconsistent'}
                  name="twenty"
                  // onChange={()=>setData({...data,twenty:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_twenty==='Proficient'}
                  name="twenty"
                // onChange={()=>setData({...data,twenty:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_twenty==='effective'}
                  name="twenty"
                  //  onChange={()=>setData({...data,twenty:'effective'})}
                  required
                />
                <Form.Check
               className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_twenty==='Exceptional'}
                  name="twenty"
                  // onChange={()=>setData({...data,twenty:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group> 
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Level of formality :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                  inline
                  className='mx-4'
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="twentyone"
                  checked={data.q_twentyone==='Unsatisfactory'}
                  // onChange={()=>setData({...data,twentyone:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_twentyone==='Inconsistent'}
                  name="twentyone"
                  // onChange={()=>setData({...data,twentyone:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_twentyone==='Proficient'}
                  name="twentyone"
                // onChange={()=>setData({...data,twentyone:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_twentyone==='effective'}
                  name="twentyone"
                  //  onChange={()=>setData({...data,twentyone:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_twentyone==='Exceptional'}
                  name="twentyone"
                  // onChange={()=>setData({...data,twentyone:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2} className='mt--2 text-dark'>
                Focus on cooperation, teamwork, or competitiveness :
               </Form.Label>
              <Col sm={10} >
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Unsatisfactory"
                  value="Unsatisfactory"
                  name="twentytwo"
                  checked={data.q_twentytwo==='Unsatisfactory'}
                  // onChange={()=>setData({...data,twentytwo:'Unsatisfactory'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Inconsistent"
                  value="Inconsistent"
                   checked={data.q_twentytwo==='Inconsistent'}
                  name="twentytwo"
                  // onChange={()=>setData({...data,twentytwo:'Inconsistent'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="Proficient"
                  value="Proficient"
                  checked={data.q_twentytwo==='Proficient'}
                  name="twentytwo"
                // onChange={()=>setData({...data,twentytwo:'Proficient'})}
                  required
                />
                 <Form.Check
                 className='mx-4'
                  inline
                  type="radio"
                  label="effective"
                  value="effective"
                  checked={data.q_twentytwo==='effective'}
                  name="twentytwo"
                  //  onChange={()=>setData({...data,twentytwo:'effective'})}
                  required
                />
                <Form.Check
                className='mx-4'
                  inline
                  type="radio"
                  label="Exceptional"
                  value="Exceptional"
                  checked={data.q_twentytwo==='Exceptional'}
                  name="twentytwo"
                  // onChange={()=>setData({...data,twentytwo:'Exceptional'})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group>
               <Form.Group as={Row} id="form-submit-button" >
              <Col sm={{ span: 10, offset:2}} >
                 <Button className='bg-primary' onClick={clickHandler} style={{marginLeft:'47vw'}} >Back</Button>
              </Col>
            </Form.Group>
            </Form.Group>
            </Form>
          </div>
           
      </div>
         )
}

export default ViewEvaluationForm;
