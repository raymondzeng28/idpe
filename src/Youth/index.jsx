import React from 'react';
import './index.scss';
import Gallery from 'Shared/Gallery';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures1: [
        {
          orientation: `landscape`,
          source: `Images/Youth/Lucy_Cao_Horse.jpg`,
          height: null,
          width: 630,
          title: `Horse`,
          description: `Artist: Lucy C.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Nicole_Li_Portrait.jpg`,
          height: 550,
          width: null,
          title: `Portrait`,
          description: `Artist: Nicole L.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Vienne_Kwok_Cat.jpg`,
          height: null,
          width: 630,
          title: `Cat`,
          description: `Artist: Vienne K.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/SelinaZhangPortrait.jpg`,
          height: 550,
          width: null,
          title: `Portrait`,
          description: `Artist: Selina Z.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Hanson_Z_Bridge.jpg`,
          height: null,
          width: 630,
          title: `Bridge`,
          description: `Artist: Hanson Z.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/LinaYangSelfPortrait.JPG`,
          height: 550,
          width: null,
          title: `Portrait`,
          description: `Artist: Lina Y.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Lindsay_Yan_School_Supplies.jpg`,
          height: null,
          width: 630,
          title: `School Supplies`,
          description: `Artist: Lindsay Y.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Andy_Rooster.jpg`,
          height: null,
          width: 630,
          title: `Rooster`,
          description: `Artist: Andy D.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Ethan_Gao_Man.jpg`,
          height: 550,
          width: null,
          title: `Man with Gratitude`,
          description: `Artist: Ethan G.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/LenaMantaRay.jpg`,
          height: null,
          width: 630,
          title: `Manta Ray`,
          description: `Artist: Lena L.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/SelinaFuDog.jpg`,
          height: 550,
          width: null,
          title: `Dog`,
          description: `Artist: Selina F.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/Stephan_Liang_Math_Teacher.jpg`,
          height: 550,
          width: null,
          title: `Math Teacher`,
          description: `Artist: Stephan L.`
        }
      ]
    };
  }

  render() {
    return (
      <div className="body-wide-content">
        <h2>Youth Category</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default About;
