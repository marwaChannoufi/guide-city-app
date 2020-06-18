import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../info";

class Home extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.info.map(item => {
            return (
              <div>
                <Info key={item.id} item={item} />
              </div>
            );
          });
        }}
      </InfoConsumer>
    );
  }
}
export default Home;
