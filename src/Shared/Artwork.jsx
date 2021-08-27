import React from 'react';

class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.picture,
      pictureJSX: [],
      pictureStyle: {
        display: "block",
        margin: "2em auto 0 auto",
        border: "1px solid white"
      },
      textStyle: {
        clear: "both",
        textAlign: "center",
        color: "#FFFF88",
        marginTop: "1em",
        marginBottom: "2em"
      },
      titleTextStyle: {
        fontStyle: "italic",
        fontWeight: "bold"
      }
    }
  }

  generatePictureJSX(picture) {
    return (<img
      src={ require("../Assets/" + picture.source).default }
      alt={ picture.title }
      height={ picture.height }
      width={ picture.width }
      style={ this.state.pictureStyle }
      />);
  }

  generateTextJSX(picture) {
    return (<div style={ this.state.textStyle }>
        <p><span style={ this.state.titleTextStyle }>{ picture.title }</span>
          <span> </span>
          { picture.description }
        </p>
      </div>);
  }

  componentDidMount() {
    let picturesJSX = [];
    let picture = this.state.picture;
    picturesJSX.push(this.generatePictureJSX(picture));
    picturesJSX.push(this.generateTextJSX(picture));
    this.setState({ picturesJSX: picturesJSX });
  }

  render() {
    return <>{ this.state.picturesJSX }</>;
  }
}

export default Artwork;
