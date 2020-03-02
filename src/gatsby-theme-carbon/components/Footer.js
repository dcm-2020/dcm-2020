import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>Welcome to join our <code>Disease Computational Modeling</code> workshop at IJCAI 2020.</p>

    <p>Site generated with <a href="https://github.com/carbon-design-system/gatsby-theme-carbon">Gatsby Carbon</a>. Last updated at {buildTime}.</p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ijcai20.org/', linkText: 'IJCAI 2020' },
  ],
  secondCol: [
    { href: 'https://researcher.watson.ibm.com/researcher/view_group.php?id=6743', linkText: 'IBM Research - Computational Health' },
    { href: 'https://research.ibm.com/labs/china/', linkText: 'IBM Research China' },
    
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
