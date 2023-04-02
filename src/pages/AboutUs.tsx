import { AboutUsProps } from '../types/AboutUsInterfaces';

const AboutUs = (props: AboutUsProps) => {
  return (
    <>
      <h1> {props.page}</h1>
      <p>On this page you will learn information about us.</p>
    </>
  );
};

export default AboutUs;
