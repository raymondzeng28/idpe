import React from 'react';
import './index.scss';
import Gallery from 'Shared/Gallery';

class Professional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures1: [
        {
          orientation: `landscape`,
          source: `Images/Professional/refining_rice.jpg`,
          height: null,
          width: 630,
          title: `Refining Rice`,
          description: `Artist: Uncle Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/Bust.jpg`,
          height: 550,
          width: null,
          title: `Sculpture`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/temple_by_the_sea.jpg`,
          height: null,
          width: 630,
          title: `Temple by the Sea`,
          description: `Artist: Wing Guan`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/an_art_student.jpg`,
          height: 550,
          width: null,
          title: `Art Student`,
          description: `Artist: Uncle Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/a_laughing_gentleman.jpg`,
          height: 550,
          width: null,
          title: `A Laughing Gentleman`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/red_panda.jpg`,
          height: null,
          width: 630,
          title: `Red Panda`,
          description: `Artist: Uncle Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/student.JPG`,
          height: 550,
          width: null,
          title: `Student`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/man_with_glasses.jpg`,
          height: 550,
          width: null,
          title: `Man with Glasses`,
          description: `Artist: Olivia Zeng`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/a_bridge_in_europe.jpg`,
          height: null,
          width: 630,
          title: `A Bridge in Europe`,
          description: `Artist: Wing Guan`
        },
        {
          orientation: `landscape`,
          source: `Images/Professional/mermaid.jpg`,
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
        <h2>Professional Category</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default Professional;
