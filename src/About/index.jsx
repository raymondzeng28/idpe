import React from 'react';
import './index.scss';
import Artwork from 'Shared/Artwork';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refiningRice: {
        source: `Images/About/refining_rice.jpg`,
        height: null,
        width: 630,
        title: `Refining Rice`,
        description: `by Uncle Zeng`
      },
      basketGirl: {
        source: `Images/About/zenggirlwithbasket2.jpg`,
        height: 550,
        width: null,
        title: `Girl with Basket`,
        description: `by Uncle Zeng`
      }
    }
  }
  render() {
    return (
      <div className="body-content">
        <h2>The Founder's Story about Pencil Drawing</h2>
        <div className="block-quote">
          <p><span style={{fontStyle: "italic"}}>
            &quot;In drawing, one must look for or suspect that there is more than is casually seen.&quot;
          </span></p>
          <p>
            - George Bridgman
            {this.props.screenWidth < 800 ? <br/> : ' '}
            (Canadian-American figure drawing artist, 1864-1943)
          </p>
        </div>
        <p className="paragraph">
          When I was just 12 years old, my first art teacher, Li Wan Yi, gifted me a 4B pencil and a book on learning how to draw. He taught me the importance of making drawing a daily exercise, something which I have continued to do to this day. While developing strong drawing skills can help students potentially become successful artists or even masters in fine arts, drawing has other benefits as well. Li Wan Yi expressed to me that practicing pencil drawing can help improve intelligence, memory, and observational skills.
        </p>
        <Artwork picture={ this.state.refiningRice }></Artwork>
        <p className="paragraph" style={{textAlign: "center"}}>
          &quot;Drawing is an important form of communication and can often convey ideas better than words.&quot;
        </p>
        <p className="paragraph">
          Under Li Wan Yi’s guidance, I spent much of my time as an art student developing my drawing skills before I even began to pursue painting. Not long after, I was regarded as a master of drawing amongst my peers at the Guangzhou Academy of Fine Arts. I am incredibly grateful towards my teacher, as I realized that this knowledge in drawing was what gave me the ability to depict my creativity and emotions in my paintings. I was able to create works in any style I chose as I had a very strong foundation of drawing skills.
        </p>
        <p className="paragraph">
          With regard to drawing, my teacher encouraged me to always keep these important concepts in mind: composition, proportion, perspective, structure, movement, and dynamism. Experimentation and variation in line and shading was also of great importance. These same concepts later became extremely valuable and applicable towards my works in watercolour, acrylic painting, oil painting, and architectural design.
        </p>
        <p className="paragraph">
          I discovered that after drawing any subject, I was able to observe it much more closely in real life. Whether it be in architecture, people, animals, or other subjects, I began to notice details that many others did not. I found my teacher’s words very true and observed that students who studied drawing often developed strong attention to detail, a skill which helped them achieve later success.
        </p>
        <Artwork picture={ this.state.basketGirl }></Artwork>
        <p className="paragraph">
          About 20 years ago, I began teaching drawing to my son and daughter as well as the children of some close friends. Their achievements include full university scholarships, Canadian Governor General Academic Medals, top student awards, and first place in the Canadian National Remembrance Day Poster Contest. I felt immense happiness in supporting these youth towards gaining these recognitions as they contributed to their communities.
        </p>
        <p className="paragraph">
          It was my teacher Li Wan Yi’s great wish for me to continue spreading the importance of drawing to younger generations of artists. In 2021, I decided to move the drawing exhibitions of previous years to an online platform without physical limitations. It is my goal to continue providing a place for young people to exhibit their artwork, take part in meaningful discussions about drawing, and be able to learn from one another. The International Pencil Drawing Exhibition’s mission is to continue sharing the importance of drawing and to bring it to new heights.
        </p>
        <p className="paragraph" style={{textAlign: "right", marginRight: "50px"}}>
          - Uncle Zeng
        </p>
        <p className="paragraph">
          For any inquiries, please feel free to email
          <a className="email-link" href="mailto:ma_studio@hotmail.com">ma_studio@hotmail.com</a>.
        </p>
      </div>
    );
  }
}

export default About;
