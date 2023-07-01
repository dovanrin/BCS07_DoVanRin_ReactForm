import React, { Component } from "react";

export default class FormSinhVien extends Component {
  state = {
    values: { maSV: "", hoTen: "", soDT: "", email: "" },
    orros: { maSV: "", hoTen: "", soDT: "", email: "" },
    activeButton: true,
  };
  getValueInput = (event) => {
    let { value, id } = event.target;

    let newValue = this.state.values;
    newValue[id] = value;
    // chech rổng
    let neworros = this.state.orros;
    if (newValue[id] == "") {
      neworros[id] = `${id} không được để rổng`;
    } else {
      neworros[id] = "";
      let type = event.target.getAttribute("data-type");

      switch (type) {
        case "number":
          {
            let regexNumber = /^[0-9]*$/;
            let res = regexNumber.test(newValue[id]);
            if (!res) {
              neworros[id] = "Trường này chỉ được nhập số";
            }
          }
          break;
        case "letter":
          {
            let regexText = /^[\p{L} ]+$/u;
            let resul = regexText.test(newValue[id]);
            if (!resul) {
              neworros[id] = "Trường này chỉ được nhập chữ";
            }
          }
          break;
      }
      let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let checkEmail = regexEmail.test(newValue.email);
      if (!checkEmail) {
        // {
        //   neworros.email = "";
        // } else
        neworros.email = "Nhập đúng định dạng email";
      }
    }
    let valid = false;
    for (let item in neworros) {
      if (this.state.orros[item] !== "" || this.state.values[item] == "") {
        valid = true;
      }
    }
    this.setState({
      values: newValue,
      orros: neworros,
      activeButton: valid,
    });
    // });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.themSinhVien({ ...this.state.values });
  };
  render() {
    console.log(this.state);
    let { maSV, hoTen, soDT, email } = this.state.orros;
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
                  value={this.state.values.maSV}
                  onChange={this.getValueInput}
                />
                <p>{maSV}</p>
              </div>
              <div className="col-6">
                <label htmlFor="">Họ Và Tên</label>
                <input
                  className="form-control"
                  type="text"
                  id="hoTen"
                  value={this.state.values.hoTen}
                  data-type="letter"
                  onChange={this.getValueInput}
                />
                <p>{hoTen}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="">Số Điện Thoại</label>
                <input
                  className="form-control"
                  type="text"
                  id="soDT"
                  value={this.state.values.soDT}
                  onChange={this.getValueInput}
                  data-type="number"
                />
                <p>{soDT}</p>
              </div>
              <div className="col-6">
                <label htmlFor="">EMail</label>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  value={this.state.values.email}
                  onChange={this.getValueInput}
                />
                <p>{email}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary me-3"
              type="submit"
              disabled={this.state.activeButton}
            >
              Thêm Sinh Viên
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                this.props.capNhatThongTin({ ...this.state.values });
              }}
            >
              Cập Nhập
            </button>
          </div>
        </form>
      </div>
    );
  }
}
