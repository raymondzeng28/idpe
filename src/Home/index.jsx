import React from 'react';
import './index.scss';
import Gallery from 'Shared/Gallery';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures1: [
        {
          orientation: `landscape`,
          source: `Images/Home/refining_rice.jpg`,
          height: null,
          width: 630,
          title: `Refining Rice`,
          description: `Artist: Uncle Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/Bust.jpg`,
          height: 550,
          width: null,
          title: `Sculpture`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/temple_by_the_sea.jpg`,
          height: null,
          width: 630,
          title: `Temple by the Sea`,
          description: `Artist: Wing Guan`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/an_art_student.jpg`,
          height: 550,
          width: null,
          title: `Art Student`,
          description: `Artist: Uncle Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/a_laughing_gentleman.jpg`,
          height: 550,
          width: null,
          title: `A Laughing Gentleman`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/red_panda.jpg`,
          height: null,
          width: 630,
          title: `Red Panda`,
          description: `Artist: Uncle Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/student.JPG`,
          height: 550,
          width: null,
          title: `Student`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/man_with_glasses.jpg`,
          height: 550,
          width: null,
          title: `Man with Glasses`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/a_bridge_in_europe.jpg`,
          height: null,
          width: 630,
          title: `A Bridge in Europe`,
          description: `Artist: Wing Guan`
        },
        {
          orientation: `landscape`,
          source: `Images/Home/mermaid.jpg`,
          height: 550,
          width: null,
          title: `Mermaid`,
          description: `Artist: Uncle Zeng`
        }
      ]
    };
  }

  render() {
    return (
      <div className="body-wide-content">
        <div className="block-quote">
          <p><span style={{fontStyle: "italic"}}>
            &quot;Drawing contains everything, except the hue.&quot;
          </span></p>
          <p>
            - Jean-Auguste-Dominique Ingres
            {this.props.screenWidth < 800 ? <br/> : ' '}
            (French Neoclassical painter, 1780-1867)
          </p>
        </div>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default Home;
