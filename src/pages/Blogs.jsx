import React from 'react'

const Blogs = () => {
  return (
    <div className='container mt-4'>
      <h3 className='mb-4'>Các nền tảng khác của tôi</h3>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">GitHub</h5>
          <p className="card-text">Xem các dự án của tôi trên GitHub</p>
          <a href="http://github.com/vinhveer" className="btn btn-primary">Xem</a>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">dodo E-learning Platform</h5>
          <p className="card-text">Nền tảng học trực tuyến</p>
          <a href="http://ec2-50-17-60-120.compute-1.amazonaws.com/" className="btn btn-primary">Truy cập ngay</a>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">My Linkedin</h5>
          <p className="card-text">Kết nối với tôi</p>
          <a href="https://linkedin.com/in/vinhveer" className="btn btn-primary">Kết nối</a>
        </div>
      </div>
    </div>
  )
}

export default Blogs
