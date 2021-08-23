import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.pictures,
      picturesJSX: [],
      landscapePictureStyle: {
        display: "block",
        margin: "0 auto"
      },
      portraitPictureStyle: {
        marginLeft: "40px",
      },
      landscapeTextStyle: {
        clear: "both",
        textAlign: "center"
      },
      portraitTextStyle: {
        display: "inline-block",
        marginLeft: "30px"
      },
      titleTextStyle: {
        fontStyle: "italic",
        fontWeight: "bold"
      },
      separatorStyle: {
        borderBottom: "1px solid #405c17",
        paddingTop: "0.6em",
        marginBottom: "1.8em"
      }
    }
  }

  generateLandscapePictureJSX(picture) {
    return (<img
      src={ require("../Assets/" + picture.source).default }
      alt={ picture.title }
      height={ picture.height }
      width={ picture.width }
      style={ this.state.landscapePictureStyle }
      />);
  }

  generatePortraitPictureJSX(picture) {
    return (<img
      src={ require("../Assets/" + picture.source).default}
      alt={ picture.title }
      height={ picture.height }
      width={ picture.width }
      style={ this.state.portraitPictureStyle }
      />);
  }

  generateLandscapeTextJSX(picture) {
    return (<div style={ this.state.landscapeTextStyle }>
        <p>Title: <span style={ this.state.titleTextStyle }>{ picture.title }</span>
          <span style={{ margin: "0 2.5em" }}></span>
          {picture.description}
        </p>
      </div>);
  }

  generatePortraitTextJSX(picture) {
    return (<div style={ this.state.portraitTextStyle }>
        <p>Title: <span style={ this.state.titleTextStyle }>{ picture.title }</span></p>
        <p>{ picture.description }</p>
        <p style={{ marginBottom: "2.5em", display: "inline-block" }}></p>
      </div>)
  }

  generateBorderJSX() {
    return <p style={this.state.separatorStyle}></p>;
  }

  componentDidMount() {
    let picturesJSX = [];

    for (let i = 0; i < this.state.pictures.length; i++) {
      let picture = this.state.pictures[i];
      if (picture.orientation === "landscape") {
        picturesJSX.push(this.generateLandscapePictureJSX(picture));
        picturesJSX.push(this.generateLandscapeTextJSX(picture));
      } else if (picture.orientation === "portrait") {
        picturesJSX.push(this.generatePortraitPictureJSX(picture));
        picturesJSX.push(this.generatePortraitTextJSX(picture));
      } else { // typo in orientation property
        picturesJSX.push(<p>Image Error</p>);
      }
      if (i < this.state.pictures.length - 1) {
        picturesJSX.push(this.generateBorderJSX());
      }
    }

    this.setState({ picturesJSX: picturesJSX });
  }

  render() {
    return <>{ this.state.picturesJSX }</>;
  }
}

export default Gallery;
