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
          source: `Images/Youth/hansonstreet.jpg`,
          height: 530,
          width: null,
          title: `Down the Street`,
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
          source: `Images/Youth/ethandinosaur.jpg`,
          height: null,
          width: 630,
          title: `Dinosaur`,
          description: `Artist: Ethan G.`
        },
        {
          orientation: `landscape`,
          source: `Images/Youth/selinamonkey.jpg`,
          height: 550,
          width: null,
          title: `Monkey`,
          description: `Artist: Selina Z.`
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
        <div className="block-quote">
          <p><span style={{fontStyle: "italic"}}>
            &quot;Drawing contains everything, except the hue.&quot;
          </span></p>
          <p>
            - Jean-Auguste-Dominique Ingres
            {this.props.screenWidth < 800 ? <br/> : ' '}
            (French painter, 1780-1867)
          </p>
        </div>
        <h2>Youth Category</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default About;
