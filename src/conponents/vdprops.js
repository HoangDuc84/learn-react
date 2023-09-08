  // const Vdpops =(props)=>{
  //   // const a = props.data;
  //   // const a = "data bên ustate"
  //   //  console.log("check it down >>>",Text)
  //   return(
       
  //       <div>
  //       {props.data.map((a) => {
  //         return (
  //           <li key={a.id}>{a.node}</li>
  //         );
  //       })}
  //     </div>
  //   )
  // }
  // export default Vdpops;
const Vdprops =(props)=>{
  // const a = props.data
            
  const {data, content,deleteData} = props
  const handleDelete = (id)=>{
     deleteData(id)
  }

  return(
    <div>
      <div>
        {content}
      </div>
      {
        data.map((a)=>{
          return(
            <div key={a.id}>
              <li >{a.node} <span  onClick={()=>{handleDelete(a.id)}}>x</span></li> 
           
            </div>
             
          )
        })
        }
      <hr/>  
        </div>    
  )
}
export default Vdprops;