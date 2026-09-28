import { Outlet } from "react-router-dom";
import Header from "./layouts/components/Header";
import Footer from "./layouts/components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;