import React from "react";

function Profile(props) {
  console.log(props);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: "150px" }}
            />
            <h5 className="my-3">{props.name}</h5>
            <p className="text-muted mb-1">
              Sinh Viên Kì 5 <br /> Ngành Học: Lập Trình Web
            </p>
            <p className="text-muted mb-4">{props.address}</p>
            {/* <button className='printButton' onClick={printDocument}></button> */}
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="bi bi-telephone">Liên Hệ</i>
                <p className="mb-0">0793 665 088</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i>Trường</i>
                <p className="mb-0">Cao Đẳng FPT Polytechnic Tây Nguyên</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i>Ngành</i>
                <p className="mb-0">Web Developer - Backend Development</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Họ và Tên</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{props.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{props.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Ngày Sinh</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{props.date}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Số điện thoại</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{props.phone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Địa Chỉ</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{props.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">Ngôn Ngữ</p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>
                  HTML & CSS
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Javascript
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "42%" }}
                    aria-valuenow="42"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  PHP
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">Framework</p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>
                  Laravel
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  ReactJS
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "22%" }}
                    aria-valuenow="22"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
