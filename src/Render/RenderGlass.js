import React, { Component } from "react";
import { arrGlass } from "./Databyding";

export default class RenderGlass extends Component {
  state = {
    glass: "",
    name: "",
    desc: "",
  };

  renderListGass = () => {
    return arrGlass.map(({ url, name, hinhModel, desc }, index) => {
      return (
        <div
          key={index}
          class="card text-start col-1 m-2 align-items-center d-flex"
          onClick={() => {
            this.handelGlass(url, name, desc);
          }}
        >
          <img class="card-img-top p-2 w-100" src={hinhModel} alt="Title" />
        </div>
      );
    });
  };
  handelGlass = (value, name, desc) => {
    this.setState({ glass: value, name: name, desc: desc });
  };
  render() {
    let { glass, name, desc } = this.state;
    console.log(glass);
    return (
      <div>
        <div className="w-75 text-center container position-relative abs">
          <img className="w-50" src="./img_ex/glassesImage/model.jpg" alt="" />
          <img
            className="position-absolute glassMOdel opacity-75"
            src={glass}
            alt=""
          />
          <div className="position-absolute text">
            <h2>Thông tin chi tiết</h2>
            <h3>{name}</h3>
            <p>
              <b>{desc}</b>
            </p>
          </div>
        </div>
        <div className="row">{this.renderListGass()}</div>
      </div>
    );
  }
}
