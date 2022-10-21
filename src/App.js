import Footer from './componets/particles/Footer';
import Header from './componets/particles/Header';
import Pages from "./componets/pages/Pages";
import ScrollToTop from './utils/scrollToTop';

import './index.css'

function App() {
  return (
    <div className="application">
      <Header />
      <div className="container">
        <ScrollToTop />
        <Pages/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
