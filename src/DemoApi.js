import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const DemoAPI = () => {
  const [data, setData] = useState([
    {
      title: "",
      image: "",
      des: "",
    },
  ]);

  const createPost = () => {
    axios
      .post("/posts", {
        ...data,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Thêm Thành Công!",
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Bạn Chưa Nhập Đầy Đủ Thông Tin!",
        });
      });
  };
function handleChangeData(e) {
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value,
  });
}
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:3000/posts")
      .then(function (response) {
        setPosts(response.data);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  // console.log(posts);
  return (
    <div classNameName="container">
      <form method="POST">
        <h1>Create Post</h1>
        <br />
        <div classNameName="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="title"
            onChange={handleChangeData}
          />
        </div>
        <div classNameName="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            {" "}
            Link Image
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="image"
            onChange={handleChangeData}
          />
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            name="des"
            onChange={handleChangeData}
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
        <br />
        <button type="button" className="btn btn-primary" onClick={createPost}>
          Create
        </button>
      </form>
      {posts.map((item) => {
        return (
          <div classNameName="item">
            <p classNameName="id">{item.id}</p>
            <p classNameName="title">{item.title}</p>
            <p classNameName="des">{item.des}</p>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DemoAPI;
