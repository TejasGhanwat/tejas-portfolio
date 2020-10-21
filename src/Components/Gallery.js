import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var pics = this.props.data.map(function (pic) {
        return (
          <li key={pic.title}>
            <a href={pic.url}>
              <img
                style={{
                  margin: "5px",
                  padding: "5px",
                  height: "auto",
                  width: "100%",
                }}
                src={pic.imgUrl}
                alt={pic.title}
              ></img>
            </a>
          </li>
        );
      });
    }

    return (
      <section id='gallery'>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "7px",
          }}
        >
          {pics}
        </ul>
      </section>
    );
  }
}

export default About;
