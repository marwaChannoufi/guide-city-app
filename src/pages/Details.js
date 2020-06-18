import React, { Component } from "react";
import { InfoConsumer } from "../context";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description
          } = data.detailInfo;

          return (
            <React.Fragment>
              <div className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>
                {/* // Social icons */}
                <div className="container mt-5 ">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <i className="fa fa-facebook-f" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-twitter" />
                    </div>

                    <div className="col-2">
                      <i className="fa fa-google-plus" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-reddit" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-whatsapp" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-comments" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Nav Link */}
              <div className="container  mt-5">
                <ul
                  className="nav nav-tabs  "
                  // id="myTab"
                  // role="tablist"
                >
                  {/* about palece link */}
                  <li className="nav-item">
                    <a
                      href="#aboutPlace"
                      className="nav-link active"
                      role="tab"
                      data-toggle="tab"
                      // id="place-tab"
                      // aria-selected="true"
                    >
                      About Place
                    </a>
                  </li>
                  {/* reviews link */}
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link "
                      role="tab"
                      data-toggle="tab"
                      // id="reviews-tab"
                      // aria-selected="false"
                    >
                      Reviews
                    </a>
                  </li>
                  {/* map link */}
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                      // id="map-tab"
                      // aria-selected="false"
                    >
                      Map
                    </a>
                  </li>
                </ul>

                {/* tab pane */}
                <div
                  className="tab-content mb-5"
                  // id="myTabContent"
                >
                  {/* about place tab */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in   active text-center mt-5"
                    role="tabpanel"
                    // aria-labelledby="place-tab"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>
                  {/* Reviews */}
                  <div
                    id="reviews"
                    className="tab-pane  "
                    role="tabpanel"
                    // aria-labelledby="reviews-tab"
                  >
                    review content
                  </div>
                  {/* Map */}
                  <div
                    id="map"
                    className="tab-pane  "
                    role="tabpanel"
                    // aria-labelledby="map-tab"
                  >
                    <img
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711"
                      style={{ height: "200px", width: "300px" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}
export default Details;
