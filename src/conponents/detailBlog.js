// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useFetch from "../customize/fetch";
// import "./blog.css";

// const DetailBlog = () => {
//   let { id } = useParams();

//   const {
//     data: detailBlog,
//     loading,
//     error,
//   } = useFetch(`https://reqres.in/api/users?id=${id}`, false);

//   console.log(detailBlog.data);
//   let navigate = useNavigate();

//   const handleBack = () => {
//     navigate("/blog");
//   };
//   return (
//     <>
//       <div>
//         <span onClick={handleBack}>&lt;--BACK </span>
//       </div>

//       <div>
//         {detailBlog && (
//           <div className="card" style={{ width: "18rem" }}>
//             <img
//               src={detailBlog.data.avatar}
//               className="card-img-top"
//               alt="User Avatar"
//             />
//             <div className="card-body">
//               <h5 className="card-title">
//                 {detailBlog.first_name} {detailBlog.last_name}
//               </h5>
//               <p className="card-text">Email: {detailBlog.email}</p>
//               <a href="#" className="btn btn-primary">
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
// export default DetailBlog;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";

const DetailBlog = () => {
  let { id } = useParams();

  const {
    data: dataBlogDetail,
    loading,
    error,
  } = useFetch(`https://reqres.in/api/users?id=${id}`, false);

  console.log(dataBlogDetail.data);
  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/blog");
  };

  return (
    <>
      <div>{loading === true && <div> Loading...</div>}</div>

      <div>
        {dataBlogDetail.data && (
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={dataBlogDetail.data.avatar}
              className="card-img-top"
              alt="User Avatar"
            />
            <div className="card-body">
              <h5 className="card-title">
                {dataBlogDetail.data.first_name} {dataBlogDetail.data.last_name}
              </h5>
              <p className="card-text">Email: {dataBlogDetail.data.email}</p>
              <a  className="btn btn-primary">
                <span onClick={handleBack}> BACK </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
