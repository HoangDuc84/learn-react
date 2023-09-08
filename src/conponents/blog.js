import useFetch from "../customize/fetch";
import "./blog.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddNewBlog from "../customize/addnewbog";
const Blog = () => {
  const [show, setShow] = useState(false);
// state a
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: DataBlogs,
    loading,
    error,
  } = useFetch("https://reqres.in/api/users?paage=2", false);
  // let navigate = useNavigate();
  // const handlAddBlog = () => {
  //   navigate("/add-new-blog");
  // };

  return (
    <>
      <Button variant="primary" className="m-3" onClick={handleShow}>
       + Add New Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <AddNewBlog/>
        </Modal.Body>
       
      </Modal>
      {/* <div className="add-blog">
        <button onClick={handlAddBlog}>+ Add New Blog</button>{" "}
      </div> */}
      <div className="blog-container">
        {loading === false &&
          DataBlogs &&
          DataBlogs.data &&
          DataBlogs.data.length > 0 &&
          DataBlogs.data.map((item) => (
            <div className="card" style={{ width: "18rem" }} key={item.id}>
              <img
                src={item.avatar}
                className="card-img-top"
                alt="User Avatar"
              />
              <button className="btn-new">
                <Link to={`/blog/${item.id}`}> Information </Link>
              </button>
            </div>
          ))}
        {loading === true && <div> Loading data...........</div>}
      </div>
      <div>
        
      </div>
    </>
  );
};
export { Blog };
