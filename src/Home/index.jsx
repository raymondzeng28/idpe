import React from 'react';
import './index.scss';
import Gallery from 'Shared/Gallery';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures1: [
        {
          orientation: `portrait`,
          source: `Images/Test/bamboo_and_boats.jpg`,
          height: 550,
          width: null,
          title: `Bamboo and Boats`,
          description: `Artist: Xiangming Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Test/bamboo_and_cranes.jpg`,
          height: null,
          width: 650,
          title: `Bamboo and Cranes`,
          description: `Artist: Xiangming Zeng`
        },
        {
          orientation: `portrait`,
          source: `Images/Test/bamboo_and_boats.jpg`,
          height: 550,
          width: null,
          title: `Bamboo and Boats`,
          description: `Artist: Xiangming Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Test/blossom_village.jpg`,
          height: null,
          width: 600,
          title: `Blossom Village`,
          description: `Artist: Xiangming Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Test/chang_hua.JPG`,
          height: null,
          width: 700,
          title: `Chang Hua`,
          description: `Some short description`
        }
      ]
    };
  }

  render() {
    return (
      <div className="body-wide-content">
        <h2>Home</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default Home;
