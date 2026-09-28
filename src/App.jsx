import { Outlet } from "react-router-dom";
import Header from "./layouts/components/Header";
import Footer from "./layouts/components/Footer";
import ScrollToTop from "./layouts/components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;