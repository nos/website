import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Token from '../components/Token';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import Diagram from '../components/Diagram';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
// import Demo from '../components/Demo';

const Index = () => (
  <Layout fixed>
    <Hero />
    <Partners />
    <Features />
    < Token />
    <Newsletter />
    <Showcase />
    <Diagram />
    <Team />
    {/* <Demo /> */}
  </Layout>
);

export default Index;
