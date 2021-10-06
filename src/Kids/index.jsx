import React from 'react';
import './index.scss';
import Gallery from 'Shared/Gallery';

class Kids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures1: [
        {
          orientation: `landscape`,
          source: `Images/Kids/RyanLiuBull.jpg`,
          height: null,
          width: 600,
          title: `Bull`,
          description: `Artist: Ryan L.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/Andy_Rooster.jpg`,
          height: null,
          width: 600,
          title: `Rooster`,
          description: `Artist: Andy D.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/alinabridge.jpg`,
          height: null,
          width: 600,
          title: `Bridge`,
          description: `Artist: Alina J.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/rachel_l_swan.jpg`,
          height: 550,
          width: null,
          title: `Swan`,
          description: `Artist: Rachel L.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/zhongyu_w_fish.jpg`,
          height: null,
          width: 600,
          title: `Fish`,
          description: `Artist: Zhongyu W.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/ryan_z_pelican.jpg`,
          height: 550,
          width: null,
          title: `Pelican`,
          description: `Artist: Ryan Z.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/ethandinosaur.jpg`,
          height: null,
          width: 600,
          title: `Dinosaur`,
          description: `Artist: Ethan G.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/helenrhinoceros.jpg`,
          height: null,
          width: 600,
          title: `Rhinoceros`,
          description: `Artist: Helen S.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/KexinOwls.jpg`,
          height: null,
          width: 600,
          title: `Owls`,
          description: `Artist: Kexin W.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/lucas_bird.jpg`,
          height: null,
          width: 600,
          title: `Bird`,
          description: `Artist: Lucas Z.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/WesleyFish.png`,
          height: null,
          width: 600,
          title: `Fish`,
          description: `Artist: Wesley X.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/EmmaGaoWalrus.jpg`,
          height: null,
          width: 600,
          title: `Walrus`,
          description: `Artist: Emma G.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/chenxing_fish.jpg`,
          height: null,
          width: 600,
          title: `Fish`,
          description: `Artist: Chenxing W.`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/TonyGemsbok.png`,
          height: null,
          width: 600,
          title: `Gemsbok`,
          description: `Artist: Tony L.`
        }
      ]
    };
  }

  render() {
    return (
      <div className="body-wide-content">
        <div className="block-quote">
          <p><span style={{fontStyle: "italic"}}>
            &quot;Sketch everything and keep your curiosity fresh.&quot;
          </span></p>
          <p>
            - John Singer Sargent (American painter, 1856-1925)
          </p>
        </div>
        <h2>Kids Category</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default Kids;
