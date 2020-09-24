import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className='columns portfolio-item'>
            <div className='item-wrap'>
              <a href={projects.url} target='_blank' title={projects.title}>
                <img
                  style={{ height: "170px", width: "350px" }}
                  alt={projects.title}
                  src={projectImage}
                />
              </a>
              <h1 style={{ margin: "1.5rem" }}>{projects.title}</h1>
              <p style={{ marginBottom: "5px" }}>{projects.category}</p>
              <a href={projects.urlOther} alt='#'>
                {projects.urlTitle}
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
