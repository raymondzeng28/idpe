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
          width: 630,
          title: `Bull`,
          description: `Artist: Ryan Liu`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/KexinOwls.jpg`,
          height: null,
          width: 630,
          title: `Owls`,
          description: `Artist: Kexin Wang`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/RachelLiuPelicans.jpg`,
          height: null,
          width: 630,
          title: `Pelicans`,
          description: `Artist: Rachel Liu`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/LucasZhangKoala.jpg`,
          height: null,
          width: 630,
          title: `Koala`,
          description: `Artist: Lucas Zhang`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/WesleyFish.png`,
          height: null,
          width: 630,
          title: `Fish`,
          description: `Artist: Wesley Xu`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/EmmaGaoWalrus.jpg`,
          height: null,
          width: 630,
          title: `Walrus`,
          description: `Artist: Emma Gao`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/chenxing_fish.jpg`,
          height: null,
          width: 630,
          title: `Fish`,
          description: `Artist: Chenxing Wang`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/TonyGemsbok.png`,
          height: null,
          width: 630,
          title: `Gemsbok`,
          description: `Artist: Tony Li`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/Zhongyu_Seal.jpg`,
          height: null,
          width: 630,
          title: `Seal`,
          description: `Artist: Zhongyu Wang`
        },
        {
          orientation: `landscape`,
          source: `Images/Kids/RyanZhangRiverOtter.jpg`,
          height: null,
          width: 630,
          title: `River Otter`,
          description: `Artist: Ryan Zhang`
        }
      ]
    };
  }

  render() {
    return (
      <div className="body-wide-content">
        <h2>Kids</h2>
        <Gallery pictures={this.state.pictures1}/>
      </div>
    );
  }
}

export default Kids;
