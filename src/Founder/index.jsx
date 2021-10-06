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
      },
      villageInAutumn: {
        source: `Images/Founder/zengvillageinautumn.jpg`,
        height: null,
        width: 650,
        title: `Village in Autumn`,
        description: `by Uncle Zeng`
      },
      foggySails: {
        source: `Images/Founder/zengfoggysails.jpg`,
        height: null,
        width: 650,
        title: `Foggy Sails`,
        description: `by Uncle Zeng`
      },
      summerGarden: {
        source: `Images/Founder/summer.JPG`,
        height: null,
        width: 650,
        title: `Summer Garden in Toronto`,
        description: `by Uncle Zeng`
      },
      bambooVillage: {
        source: `Images/Founder/zengbamboovillage.jpg`,
        height: null,
        width: 650,
        title: `Bamboo Village`,
        description: `by Uncle Zeng`
      },
      windAndRainBridge: {
        source: `Images/Founder/wind_and_rain_bridge.jpg`,
        height: null,
        width: 650,
        title: `Wind and Rain Bridge`,
        description: `by Uncle Zeng`
      },
      returningHome: {
        source: `Images/Founder/returning_home.jpg`,
        height: null,
        width: 650,
        title: `Returning Home`,
        description: `by Uncle Zeng`
      },
      bambooAndCranes: {
        source: `Images/Founder/bamboo_and_cranes.jpg`,
        height: null,
        width: 650,
        title: `Bamboo and Cranes`,
        description: `by Uncle Zeng`
      }
    }
  }

  render() {
    return (
      <div className="body-content">
        <h2>About the Founder</h2>
        <Artwork picture={ this.state.peachBlossomSpring }></Artwork>
        <p className="paragraph">
          Xiangming Zeng, also known as Uncle Zeng, is an internationally recognized master of drawing, painting, and architecture. His watercolour, acrylic, and oil paintings have been shown in museums and galleries in many different countries.
        </p>
        <Artwork picture={ this.state.villageInAutumn }></Artwork>
        <p className="paragraph">
          Two of Uncle Zeng's paintings are also in the permanent collection of the National Gallery of China.
        </p>
        <Artwork picture={ this.state.foggySails }></Artwork>
        <p className="paragraph">
          In the 1980s and 1990s, Uncle Zeng had many solo art exhibitions in famous universities such as Massachusetts Institute of Technology in the U. S. A. and Simon Fraser University in Canada.
        </p>
        <Artwork picture={ this.state.summerGarden }></Artwork>
        <p className="paragraph">
          The list of exhibition spaces where Uncle Zeng has shown his works include
          <ul>
            <li>National Gallery of China in 1984</li>
            <li>National Gallery of Russia in 1985</li>
            <li>Royal Museum of Thailand in 1985</li>
            <li>National Museum of Brazil in 1986</li>
            <li>Museum of Massachusetts Institute of Technology in 1987</li>
            <li>Pennsylvania University in the U. S. A. in 1988</li>
            <li>City Hall of Hanover, Germany in 1988</li>
            <li>Galleries in Australia in 1988</li>
            <li>Galleries in New Zealand in 1989</li>
            <li>Simon Fraser University in Canada in 1996</li>
          </ul>
        </p>
        <Artwork picture={ this.state.bambooVillage }></Artwork>
        <p className="paragraph">
          Uncle Zeng comes from an artistic and scholarly family well known in China. The Zeng family has donated many educational books and materials to schools and libraries.
        </p>
        <Artwork picture={ this.state.windAndRainBridge }></Artwork>
        <p className="paragraph">
          Now residing in Canada, Uncle Zeng has continued to give free guidance and support to many young artists in China, the United States, and Canada for more than 45 years.
        </p>
        <Artwork picture={ this.state.returningHome }></Artwork>
        <p className="paragraph">
          Uncle Zeng founded the International Pencil Drawing Exhibition to encourage young artists to achieve excellence in drawing.
        </p>
        <Artwork picture={ this.state.bambooAndCranes }></Artwork>
      </div>
    );
  }
}

export default Founder;
