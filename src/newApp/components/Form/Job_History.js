import React from 'react'
import { Form, Button, Col, Row } from "react-bootstrap";
import {API,graphqlOperation, withSSRContext} from "aws-amplify";
import {createJob} from '../../../graphql/mutations';
import {useHistory} from 'react-router'
import {useParams} from 'react-router'
import '../../../Login.css'

const JobHistory=()=> {
  const [loading,setLoading] = React.useState(false);
    const history = useHistory();
    const id = useParams().id;
   const [Err,setErr]=React.useState(false);
    const [job , setJob] = React.useState({employee_id:id,start_date:'',end_date:'',organization:'',designation:''});

    const creatJob=async ()=>{

  try{
     await API.graphql(graphqlOperation(createJob,{input:job}))
     console.log('operation successful');
  }
  catch(error){
    console.log(error);
  }
}

const clickHandler=async (e)=>{
   
      e.preventDefault();
      if(job.organization !=='' && job.designation !== ''){
              const date = job.start_date<job.end_date;
        if(date){
          setLoading(true);
        creatJob();
         window.setTimeout(()=>{
             window.location.reload();
         },3000)   
       }
    else{
    setErr(true);
    console.log('1');
      }
      }
      else{
         setErr(true);
          console.log('2');
    }
  }
  const cancelHandler=async (e)=>{
   history.push(`/editjobhistory/${id}`);
  }
  
    return (<>
        <div>
        <h1 id="role-form-title" className="m-2 p-3">Job History Form</h1>
        <div id="role-form-outer-div" className="mx-5 px-5">
          <Form id="form" >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Start Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="start date"
                  value={job.start_date}
                  onChange={(e)=>setJob({...job,start_date:e.target.value})}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
               End Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="end date"
                  value={job.end_date}
                  onChange={(e)=>setJob({...job,end_date:e.target.value})}
                  required
                />
              </Col>
           </Form.Group>
             <Form.Group as={Row}>
              <Form.Label column sm={2}>
             Organization Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="organization"
                  value={job.organization}
                  onChange={(e)=>setJob({...job,organization:e.target.value})}
                  required
                />
              </Col>
            </Form.Group>
             <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Designation
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="designation"
                  value={job.designation}
                  onChange={(e)=>setJob({...job,designation:e.target.value})}
                  required
                />
              </Col>
            </Form.Group>
            <div className='px-5'  style={{display:'flex',flexDirection:'row',gap:'1vw',marginLeft:'13vw'}}>
            <Form.Group as={Row} id="form-submit-button" >
              <Col sm={{ span: 10, offset:2}}>
                 <Button  onClick={clickHandler} disabled={loading?"true":''}>Add</Button>
              </Col>
            </Form.Group>
             <Form.Group as={Row} id="form-submit-button" >
              <Col sm={{ span: 10, offset:2}} >
                 <Button className='bg-light'  onClick={cancelHandler} disabled={loading?"true":''}>Cancel</Button>
              </Col>
            </Form.Group>
            </div>
             {Err && (<p className="alert">Error in filling the form !</p>)}
          </Form>
      </div>
</div>
   </> )
}

export default JobHistory;
