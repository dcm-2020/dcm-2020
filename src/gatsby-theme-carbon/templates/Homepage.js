import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Index from '../../images/index.png';

const BannerText = () => <h1>Disease Computational Modeling</h1>;

const FirstLeftText = () => <p>IJCAI 2020 Workshop</p>;

const FirstRightText = () => (
  <p>
    Disease Computational Modeling (DCM) at the <code>International Joint Conference on Artificial Intelligence 2020</code>.
    <a
      className={calloutLink}
      href="https://www.ijcai20.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
    January 8, 2021, Japan. →
    </a>
  </p>
);

const SecondLeftText = () => <p>Agenda</p>;

const SecondRightText = () => (
  <p>
   Agenda
    <a
      className={calloutLink}
      href="/agenda"
    >
      Quick glance →
    </a>
  </p>
);



const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Index} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#061f80"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#030303"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
