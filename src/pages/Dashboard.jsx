import React,{useState} from 'react'
import {Row, Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'



function Dashboard() {
  const [addStatus,setAddStatus]=useState({})

  return (

    <>
    <div>
      <h3 >dashboard</h3>
      <Link to={'/his'} style={{color:'darkblue'}}>Watch history</Link>

      <Row className='p-5'>
        <Col sm='1' md='1'>
        <Addvideos setAddStatus={setAddStatus}/>
        </Col>

        <Col sm='4' md='6'>
          <Videos addStatus={addStatus}/>
        </Col>

        <Col sm='2' md='4'>
          <Categories/>
        </Col>
      </Row>

    </div>
    <ToastContainer/>
    </>

    )
}

export default Dashboard