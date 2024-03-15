
import React,{useEffect,useState} from 'react'
import { getHistory } from '../services/allApis'
import { deletehistory } from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify'

function History() {

  const[his,setHis]=useState([])
  const[delhis,setDelhis]=useState({})

  const hisdelete=async(id)=>{
    console.log(id)
    const res=await deletehistory(id)
    console.log(res)
    if (res.status>=200 && res.status<=300){
      setDelhis(res)
      toast.success("history deleted")
    }
      else{
        toast.error("history deletion Failed")
      }

  }

  useEffect(()=>{
    getData()
  },[delhis])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)
  }

  return (
    <>
    <div className='p-5'>
      <h1>watch history</h1>
      <table className='table bg-dark text-white'>
        <tr>
          <th>caption </th>
          <th>Url </th>
          <th>Date and time </th>
        </tr>
          {
            his ?
            his.map(item=>(
              <tr>
                <td>{item.caption}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td><i class="fa-solid fa-trash" onClick={()=>{hisdelete(item.id)}}></i></td>

              </tr>
            ))
            :
            <tr>
              <p className='text-danger'>No watch history</p>
            </tr>
          }
        
      </table>

    </div>
    <ToastContainer/>
    
    
    </>
  )
}

export default History