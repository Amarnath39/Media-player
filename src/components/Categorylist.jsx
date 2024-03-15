import React, { useEffect, useState } from 'react'
import { getCategories, getSpecificVideo, updatecategory } from '../services/allApis'
import { deletecategory } from '../services/allApis'
import Categories from './Categories'
import  {toast}  from 'react-toastify'
import VideoCard from './VideoCard'


function Categorylist({status}) {
  const [cat,setCat]=useState([])

  const[delcatstatus,setDelCatStatus]=useState({})

  useEffect(()=>{
    getCat()
  },[status,delcatstatus])


  const getCat=async()=>{
    const res=await getCategories()
    console.log(res.data)
    setCat(res.data)
  }

  const deletecat=async(id)=>{
    console.log(id)
    const res=await deletecategory(id)
    console.log(res)
    if (res.status>=200 && res.status<=300){
      setDelCatStatus(res)
      toast.success("Video deleted")
    }
      else{
        toast.error("Video deletion Failed")
      }
    }

    const handleDrop=async(e,id)=>{
      console.log("category id:"+id)
      const vid=e.dataTransfer.getData("videoId")
      console.log("dropped video id:"+vid)
      let category = cat.find(item=>item.id==id)
      console.log(category)
      const res=await getSpecificVideo(vid)
      // console.log(res.data)
      category.videos.push(res.data)
      console.log(category)
      const rescat=await updatecategory(category,id)
      if (rescat.status>=200 && rescat.status<300){
        toast.success(`${res.data.caption} is added to ${category.name}`)
        getCat()
      }
      else{
        toast.error("video adding to category failed!!")
      }

    }
     const handleDragover=(e)=>{
      e.preventDefault()
      console.log("dragging over category")
     }

  




  return (
    <>
    <div className='bg-dark p-5 border border-light mt-3'>
      {
        cat?
        cat.map(item=>(
          <div className='bg-primary mb-3 p-3 rounded shadow' onDragOver={e=>{handleDragover(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
         <div>
         <span className='text-white'>{item.name}</span>
          <i className="fa-solid fa-trash float-end" onClick={()=>{deletecat(item.id)}}  style={{color:'#fe0101'}}></i>
         </div>
         <div>
          {
            item?.videos.map(v=>(
              <VideoCard video={v} cat={true} />
            ))
          }
         </div>
          </div>
        ))
        :
        <h1>NO Categories</h1>
      }
<categories/>
  

    </div>
    
    </>
  )
}

export default Categorylist