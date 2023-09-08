import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import { CountDown, NewCountDown } from "./countdown";

const New = () => {
  const {
    data: userData,
    loading,
    error,
  } = useFetch("https://static.pipezero.com/covid/data.json", false);
  const onTimeUp = () => {
    // alert('time up')
  };

  return (
    <>
      <CountDown onTimeUp={onTimeUp} />
      <span>___________________________________</span>
      <NewCountDown onTimeUp={onTimeUp} />

      <table className="table-new">
        {/* {console.log(userData)} */}
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Death</th>
            <th scope="col">Treating</th>
            <th scope="col">Cases</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tbody>
          {error == false &&
            loading === false &&
            userData.overview &&
            userData.overview.length > 0 &&
            userData.overview.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.death}</td>
                  <td>{item.treating}</td>
                  <td>{item.cases}</td>
                  <td>{item.recovered}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr key="loading-row">
              <td colSpan="5">Loading...</td>
            </tr>
          )}
          {error === true && (
            <tr key="error-row">
              <td colSpan="5">Something wrong...</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default New;

// import { useEffect, useState } from "react";
// import useFetch from "../customize/fetch";
// import { CountDown, NewCountDown } from "./countdown";

// const New = () => {
//   const { userData, loading, error } = useFetch(
//     "https://static.pipezero.com/covid/data.json"
//   );
//   const onTimeUp = () => {
//     // alert('time up')
//   };

//   return (
//     <>
//       <CountDown onTimeUp={onTimeUp} />
//       <span>___________________________________</span>
//       <NewCountDown onTimeUp={onTimeUp} />

//       <table className="table-new">
//         {console.log(userData)}
//         <thead>
//           <tr>
//             <th scope="col">Date</th>
//             <th scope="col">Death</th>
//             <th scope="col">Treating</th>
//             <th scope="col">Cases</th>
//             <th scope="col">Recovered</th>
//           </tr>
//         </thead>
//         <tbody>
//           {error === false &&
//             loading === false &&
//             userData &&
//             userData.length > 0 &&
//             userData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.date}</td>
//                 <td>{item.death}</td>
//                 <td>{item.treating}</td>
//                 <td>{item.cases}</td>
//                 <td>{item.recovered}</td>
//               </tr>
//             ))}
//           {loading === true && (
//             <tr key="loading-row">
//               <td colSpan="5">Loading...</td>
//             </tr>
//           )}
//           {error === true && (
//             <tr key="error-row">
//               <td colSpan="5">Something wrong...</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default New;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import moment from 'moment'
// const New = () => {
//   const [userData, setUserData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false)
//   useEffect(() => {
//     const fetchData = async () => {
//       try{
//         let res = await axios.get("https://1static.pipezero.com/covid/data.json");
//         let data = res && res.data.overview ? res.data.overview : [];
//         if (data && data.length > 0) {
//           data.map((item)=>{
//              item.data = moment(data.item).format("MM/DD/")
//             return item;

//           })
//           data= data.reverse();
//         }

//         setUserData(data);
//         setIsLoading(false);
//         setIsError(false)
//       }catch(e){
//         setIsError(true)
//         setIsLoading(false)
//       }

//       }
//       fetchData();
//     // setTimeout(() => {

//     // }, 3000);
//   });
//   return (
//     <table className="table-new">
//       <thead>
//         <tr>
//           <th scope="col">Date</th>
//           <th scope="col">Death</th>
//           <th scope="col">Treating</th>
//           <th scope="col">Cases</th>
//           <th scope="col">Recovered</th>
//         </tr>
//       </thead>
//       <tbody>
//         {isError == true &&
//           isLoading == false &&
//           userData &&
//           userData.length > 0 &&
//           userData.map((item) => {
//             return (
//               <tr>
//                 <td>{item.date}</td>
//                 <td>{item.death}</td>
//                 <td>{item.treating}</td>
//                 <td>{item.cases}</td>
//                 <td>{item.recovered}</td>
//               </tr>
//             );
//           })}
//         {isLoading == true && (
//           <tr>
//             <td colSpan={5}> Loading...</td>
//           </tr>
//         )}
//         {isError == true && (
//           <tr>
//             <td colSpan={5}>Something wrong...</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };
// export default New;
