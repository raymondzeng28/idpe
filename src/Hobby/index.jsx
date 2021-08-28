import React from 'react';
import './index.scss';
import Gallery from 'Shared/Gallery';

class Hobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures1: [
        {
          orientation: `landscape`,
          source: `Images/Hobby/Karen_Zou_Woman.jpg`,
          height: null,
          width: 630,
          title: `Woman with Sphere`,
          description: `Artist: Karen Z.`
        },
        {
          orientation: `landscape`,
          source: `Images/Hobby/Jenny_Huang_Dancer.jpg`,
          height: 550,
          width: null,
          title: `Dancer`,
          description: `Artist: Jenny H.`
        },
        {
          orientation: `landscape`,
          source: `Images/Hobby/Jack_Liang_Bee.jpg`,
          height: null,
          width: 630,
          title: `Bee`,
          description: `Artist: Jack L.`
        }
      ]
    };
  }

  render() {
    return (
      <div className="body-wide-content">
        <div className="block-quote">
          <p><span style={{fontStyle: "italic"}}>
            &quot;Drawing is the artist’s most direct and spontaneous expression.&quot;
          </span></p>
          <p>
            - Edgar Degas (French artist, 1834-1917)
          </p>
        </div>
        <h2>Hobbyist Category</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default Hobby;
