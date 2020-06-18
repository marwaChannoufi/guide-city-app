import React, { Component } from "react";

import { placeInfo, detailInfo, reviews, news } from "./data";

const InfoContext = React.createContext();

//  Provider
// Consumer

class InfoProvider extends Component {
  state = {
    info: placeInfo,
    detailInfo: detailInfo,
    reviews: reviews,
    news: news
  };

  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.info,
          detailInfo: this.state.detailInfo,
          maps: this.state.maps,
          reviews: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headertext: this.state.headerText,
          news: this.state.news
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}
const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
