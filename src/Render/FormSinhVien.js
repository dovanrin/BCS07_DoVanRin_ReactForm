import React, { Component } from "react";

export default class FormSinhVien extends Component {
  state = {
    maSV: "",
    hoTen: "",
    soDT: "",
    email: "",
  };
  getValueInput = (event) => {
    let { value, maSV } = event.target;
    this.setState({
      [maSV]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form
          className="card bg-success-subtle bg-opacity-50"
          onSubmit={this.handleSubmit}
        >
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="">Mã Sinh Viên</label>
                <input
                  className="form-control"
                  type="text"
                  id="maSV"
                  onChange={this.getValueInput}
                />
                <p></p>
              </div>
              <div className="col-6">
                <label htmlFor="">Họ Và Tên</label>
                <input
                  className="form-control"
                  type="text"
                  id="hoTen"
                  onChange={this.getValueInput}
                />
                <p></p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="">Số Điện Thoại</label>
                <input
                  className="form-control"
                  type="text"
                  id="soDT"
                  onChange={this.getValueInput}
                  data-type="letter"
                />
                <p></p>
              </div>
              <div className="col-6">
                <label htmlFor="">EMail</label>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  onChange={this.getValueInput}
                />
                <p></p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary me-3"
              type="submit"
              disabled
              //   ={this.state.activeButton}
            >
              Thêm Sinh Viên
            </button>
            <button className="btn btn-success">Cập Nhập</button>
          </div>
        </form>
      </div>
    );
  }
}
