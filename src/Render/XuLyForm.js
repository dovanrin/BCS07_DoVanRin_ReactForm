import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import { createRef } from "react";

export default class XuLyForm extends Component {
  constructor() {
    super();
    this.ref = createRef();
  }
  state = {
    arrThongTin: [],
  };
  themSinhVien = (sinhVien) => {
    let newThongTin = this.state.arrThongTin;
    newThongTin.push(sinhVien);
    this.setState({
      arrThongTin: newThongTin,
    });
  };
  xoaSinhVien = (maSV) => {
    let index = this.state.arrThongTin.findIndex((item) => item.maSV == maSV);
    if (index != -1) {
      let newThongTin = [...this.state.arrThongTin];
      newThongTin.splice(index, 1);
      this.setState({
        arrThongTin: newThongTin,
      });
    }
  };
  layThongTinInput = (maSV) => {
    let sinhVien = this.state.arrThongTin.find((item) => item.maSV == maSV);
    // if (sinhVien) {
    //   this.setState({
    //     ...this.state,
    //     sinhVien: sinhVien,
    //   });
    this.ref.current.setState({
      ...this.ref.current.state,
      values: sinhVien,
    });
  };
  capNhatThongTin = (sinhVien) => {
    let index = this.state.arrThongTin.findIndex(
      (item) => item.maSV == sinhVien.maSV
    );
    if (index !== -1) {
      let arrnewThongTin = [...this.state.arrThongTin];
      arrnewThongTin[index] = sinhVien;
      this.setState({ arrThongTin: arrnewThongTin });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="p-3 mb-2 bg-secondary text-white text-center">
            THÔNG TIN SINH VIÊN
          </h1>
          <FormSinhVien
            ref={this.ref}
            themSinhVien={this.themSinhVien}
            thongTinSinhVien={this.state.sinhVien}
            capNhatThongTin={this.capNhatThongTin}
          />
          <div>
            <table className="table mt-2" cellPadding={20}>
              <thead className="bg-secondary text-white">
                <th>Mã Sinh Viên</th>
                <th>Họ Và Tên</th>
                <th>Số Điện Thoại</th>
                <th>EMail</th>
                <th>Hành Động</th>
              </thead>
              <tbody>
                {this.state.arrThongTin.map(
                  ({ maSV, hoTen, soDT, email }, index) => {
                    return (
                      <tr key={index}>
                        <td>{maSV}</td>
                        <td>{hoTen}</td>
                        <td>{soDT}</td>
                        <td>{email}</td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.xoaSinhVien(maSV);
                          }}
                        >
                          Xóa
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            this.layThongTinInput(maSV);
                          }}
                        >
                          Sữa
                        </button>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
