import React from 'react';
import './index.scss';
import Artwork from 'Shared/Artwork';

class Founder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peachBlossomSpring: {
        source: `Images/Founder/peach_blossom_spring.jpeg`,
        height: null,
        width: 650,
        title: `Peach Blossom Spring`,
        description: `by Uncle Zeng`
      }
    }
  }

  render() {
    return (
      <div className="body-content">
        <h2>About the Founder</h2>
        <Artwork picture={this.state.peachBlossomSpring}></Artwork>
        <p className="paragraph">
          Uncle Zeng, also known as Xiangming Zeng, is an internationally recognized master of drawing, painting, and architecture. His watercolour, acrylic, and oil paintings have been shown in museums and galleries in many different countries. Two of his paintings are also in the permanent collection of the National Gallery of China.
        </p>
      </div>
    );
  }
}

export default Founder;
