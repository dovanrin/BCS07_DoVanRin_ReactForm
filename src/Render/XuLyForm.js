import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";

export default class XuLyForm extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="p-3 mb-2 bg-secondary text-white text-center">
            THÔNG TIN SINH VIÊN
          </h1>
          <FormSinhVien />
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
                <tr>
                  <td>Mã số Sv</td>
                  <td>Họ và tên</td>
                  <td>Số Ddienj Thoại</td>
                  <td>Emai</td>
                  <button className="btn btn-danger">Xóa</button>
                  <button className="btn btn-warning">Sữa</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
