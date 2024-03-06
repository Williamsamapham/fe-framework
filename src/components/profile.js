function Profile() {
    return (
        <div className="profile">
            <h1>Profile Individual</h1>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/422146916_948002263598380_3229280694165534970_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=BhAQ8EGIa6QAX9iQyFr&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBGGdRRibtRToHLLYRybE2YaoMvB1jhCD-zedbBpsaf_w&oe=65EC4A0E" alt="avatar"
                                className="rounded-circle img-fluid" style={{ width: '150px' }} />
                            <h5 className="my-3">Phạm Vinh Quang</h5>
                            <p className="text-muted mb-1">Sinh Viên Trường Cao Đẳng FPT Polytechnic</p>
                            <p className="text-muted mb-4">160/2 Y-Moal, Phường Tân Lợi , Tp.Buôn Ma Thuột</p>
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
                                    <p className="text-muted mb-0">Phạm Vinh Quang</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">phamvinhquang14042003@gmail.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Ngày Sinh</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">14/04/2003</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Số điện thoại</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">0793 665 088</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Địa Chỉ</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">160/2 Y-Moal, Phường Tân Lợi, Tp.Buôn Ma Thuột</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Về Tôi</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Sinh Viên Kì 5 Của Trường Cao Đẳng FPT Polytechnic Cơ Sở Tây Nguyên <br />
                                        Ngành học: Lập Trình Web <br />
                                        Ngôn ngữ đã học : HTML, CSS, JavaScript, PHP<br />
                                        Framework đang học : Laravel, ReactJS
                                    </p>
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