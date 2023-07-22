import {
  VStack
} from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { IntoBanner } from "./components/IntoBanner";
import { Services } from "./components/Services";


const App = () => {

  return (
    <VStack sx={{width:'100%', height: '100%'}}>
      <NavBar/>
      <IntoBanner/>
      <Services/>
      <section id='about'>About Me</section>
      <section>Gallery/Portoflio</section>
      <section>Testimonials</section>
      <section id='contact'>Contact Me</section>
      <Footer/>
    </VStack>
  );
};

export default App;
