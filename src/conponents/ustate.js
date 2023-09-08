// import { useState } from "react";
//  const Ustate = ()=>{
//    const [Name,setName] = useState('')
//    const [Text,setText] = useState([
//     {id: '1', node: 'duc'},
//     {id: '2', node: 'dep'}

//    ])

//    let handleChange =(a)=>{
//        let b = a.target.value
//        setName(b)

//    }

//    let reset =()=>{

//    }
//    let handleEvenClick=(event)=>{
//     if(!Name){
//         return;
//     }
//     let data = {id:'', node:Name}
//     setText([...Text,data])
//     setName('')

//    }

//     return(
//         <>
//         <input type="text" onChange={(a)=>handleChange(a)} />
//         <p>
//         Hiển thị: {Name}
//         </p>
//         <div>
//             {Text.map((a)=>{
//                 return(
//                <li key={a.id}> {a.node}</li>
//                 )
//             })}
//         </div>
//         <button type="button" onClick={(event)=>handleEvenClick(event)} >
//             click me
//            </button>
//         <button onClick={(a)=>reset(a)}>
//             Reset
//         </button>
//         </>
//     )

//  }
//  export default Ustate;
//
import { useState, useEffect } from "react";

import Vdpops from "./vdprops";

const Ustate = () => {
  const [Name, setName] = useState("");
  const [Text, setText] = useState([
    {
      id: "1",
      node: "duc",
      type: "ga",
    },
    { id: "2", node: "dep", type: "con" },
    { id: "3", node: "thuan", type: "ga" },
    { id: "4", node: "dan", type: "con" },
  ]);

  let handleChange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    // console.log("duc dep");
  }, []);
  // useEffect(() => {
  //   console.log("duc dep vai cac");
  // }, [Name]);

  let handleClick = (event) => {
    if (!Name) {
      return;
    }
    let data = {
      id: Math.floor(Math.random() * 100) + 1,
      node: Name,
      type: "ga",
    };
    setText([...Text, data]);
    setName("");
  };
  const deleteData = (id) => {
    let d = Text;
    d = d.filter((x) => x.id !== id);
    setText(d);
  };
  return (
    <>
      <input
        type="text"
        value={Name}
        onChange={(event) => handleChange(event)}
      />
      <p>Hiện thị: {Name}</p>

      <Vdpops data={Text} content="all" deleteData={deleteData} />
      <Vdpops
        data={Text.filter((x) => x.type === "ga")}
        content="first"
        deleteData={deleteData}
      />
      <button onClick={(event) => handleClick(event)}>click me</button>
    </>
  );
};

export default Ustate;
// thêm xóa, hiển thị 