import React, { Component } from "react";
import { arrGlass } from "./Databyding";

export default class RenderGlass extends Component {
  state = {
    glass: "./img_ex/glassesImage/v1.png",
  };

  renderListGass = () => {
    return arrGlass.map(({ url, name, hinhModel }, index) => {
      return (
        <div
          key={index}
          class="card text-start col-1 m-2 align-items-center d-flex"
          onClick={() => {
            this.handelGlass(url);
          }}
        >
          <img class="card-img-top p-2 w-100" src={hinhModel} alt="Title" />
        </div>
      );
    });
  };
  handelGlass = (value) => {
    this.setState({ glass: value });
  };
  render() {
    let { glass } = this.state;
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
        </div>
        <div className="row">{this.renderListGass()}</div>
      </div>
    );
  }
}
