import { ThemeProvider } from "styled-components";
import { Light } from "./styles/Themes";
import GLobalStyles from "./styles/GlobalStyles";

import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Utility from "./components/sections/Utility";
import Mint from "./components/sections/Mint";
import Team from "./components/sections/Team";
import Faqs from "./components/sections/Faqs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GLobalStyles />
      <ThemeProvider theme={Light}>
        <Navbar />
        <Home />
        <About />
        <Mint />
        <Utility />
        <Team />
        <Faqs />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
