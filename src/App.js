import "./App.css";
import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DemoAPI from "./DemoApi";

function App() {
  const getDataFromLocalStorage = (key, setterFunction) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) setterFunction(storedValue);
  };

  // Khai báo state
  const [ten, setTen] = useState("Pham Vinh Quang");
  const [address, setAddress] = useState(
    "160/2 Y-Moal, Phường Tân Lợi, Thành Phố Buôn Ma Thuột"
  );
  const [date, setDate] = useState("14/04/2003");
  const [email, setEmail] = useState("phamvinhquang14042003@gmail.com");
  const [phone, setPhone] = useState("0793 665 088");
  useEffect(() => {
    getDataFromLocalStorage("ten", setTen);
    getDataFromLocalStorage("address", setAddress);
    getDataFromLocalStorage("date", setDate);
    getDataFromLocalStorage("email", setEmail);
    getDataFromLocalStorage("phone", setPhone);
  }, []);
  // const printDocument = window.print();
  const handleChange = (setterFunction) => (e) => {
    setterFunction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu dữ liệu vào local storage
    localStorage.setItem("ten", ten);
    localStorage.setItem("address", address);
    localStorage.setItem("date", date);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    if (
      ten === "" ||
      address === "" ||
      date === "" ||
      email === "" ||
      phone === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Bạn Chưa Nhập Đầy Đủ Thông Tin!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Chỉnh Sửa Thành Công!",
      });
    }
  };

  return (
    <div className="app">
      {/* <Profile name={ten} date={date} phone={phone}  email={email} address={address}/>
      <div className='infor'>
          <label>Họ Và Tên: {ten}</label> <br/>
          <label>Email: {email}</label> <br/>
          <label>Ngày Sinh: {date}</label><br/>
          <label>Số Điện Thoại: {phone}</label><br/>
          <label>Địa Chỉ: {address}</label><br/>
      </div>
      <form className='formInput' onSubmit={handleSubmit}>
        <label htmlFor='name'>Họ và Tên: </label> <br />
        <input id='name' type='text' onChange={handleChange(setTen)} value={ten} /><br />
        <label htmlFor='name'>Số Điện Thoại: </label> <br />
        <input id='name' type='text' onChange={handleChange(setPhone)} value={phone} /><br />
        <label htmlFor='mssv' >Email: </label> <br />
        <input id='mssv' type='text' onChange={handleChange(setEmail)} value={email} /><br />
        <label htmlFor='mssv' >Ngày Sinh: </label> <br />
        <input id='mssv' type='text' onChange={handleChange(setDate)} value={date} /><br />
        <label htmlFor='mssv' >Địa Chỉ: </label> <br />
        <input id='mssv' type='text' onChange={handleChange(setAddress)} value={address} /><br />

        <button type='submit' className='btn btn-primary'>Submit</button>
              </form> */}

      <DemoAPI />
    </div>
  );
}

export default App;
