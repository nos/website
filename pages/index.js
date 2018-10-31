import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import Diagram from '../components/Diagram';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
// import Demo from '../components/Demo';

const Index = () => (
  <Layout>
    <Hero />
    <Partners />
    <Features />
    <Newsletter />
    <Showcase />
    <Diagram />
    <Team />
    <Newsletter />
    {/* <Demo /> */}
  </Layout>
);

export default Index;
