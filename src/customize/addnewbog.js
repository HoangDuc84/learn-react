// import { useState } from "react";
// import "../conponents/blog.css";
// // import axios from "axios";

// const AddNewBlog = () => {
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState("");

//   const handleSumbmitBtn = () => {
//     if (!firstName) {
//       alert("empty FirstName");
//       return;
//     }
//     if (!lastName) {
//       alert("emply LastName");
//       return;
//     }
//     if (!email) {
//       alert("emply Email");
//       return;
//     }

//     // if (firstName && lastName) {
//     //   const res = axios.post(
//     //     "https://reqres.in/api/users",
//     //     {},
//     //     {
//     //       name: firstName,
//     //       job: lastName,
//     //     }
//     //   );

//     //   console.log(res);

//     // console.log(
//     //   "check data: FirstName:",
//     //   firstName,
//     //   "Last-Name:",
//     //   lastName,
//     //   "Email:",
//     //   email
//     // );
//   };
//   return (
//     <>
//       <div className="add-new-container">
//         <div className="text-add-new">ADD NEW BLOG </div>
//         <div className="input-name ">
//           <label>Avatar: </label>
//           <input type="file"  />
//         </div>
//         <div className="group__name">
//           <div className="input-name">
//             <label>First-Name: </label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="input-name">
//             <label>Last-Name: </label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="input-name email">
//           <label>Email: </label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button className="btn-add-new" onClick={handleSumbmitBtn}>
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };
// export default AddNewBlog;

import { useState } from "react";
import "../conponents/blog.css";

const AddNewBlog = () => {
  const [firstName, setFirstName] = useState();
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dataBlog, setDataBlog] = useState([]);

  let handleBtn = () => {
    let data = {
      name: firstName,
      avatar: imagePreview,
    };
    setDataBlog([...dataBlog, data]);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <div className="add-new-container">
        {/* ... */}
        <div className="input-name ">
          <label>Image: </label>
          <input type="file" onChange={handleFileChange} />
          <div className="input-name">
            <label>First-Name: </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleBtn} className="btn-add-new">
          Submit
        </button>
      </div>
      <div>
        {dataBlog && dataBlog.length > 0 &&
          dataBlog.map((item) => {
            return (
              <>
                <h1>{item.name}</h1>
                <img width={300} src={item.avatar} alt="" />
              </>
            );
          })}
      </div>
    </>
  );
};

export default AddNewBlog;
