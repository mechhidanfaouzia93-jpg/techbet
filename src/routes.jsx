
import Home from "./layouts/pages/Home";
import Services from "./layouts/pages/Services";
import ServiceDetail from "./layouts/pages/ServiceDetail";
import About from "./layouts/pages/About";
import Faq from "./layouts/pages/Faq";
import NotFound from "./layouts/pages/NotFound";
import Expertise from "./layouts/pages/Expertise";
import Realisations from "./layouts/pages/Realisations";
import ProjectDetail from "./layouts/pages/ProjectDetail";
import References from "./layouts/pages/References";
import Contact from "./layouts/pages/Contact";
import App from "./App";


export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/services/:service",
                element: <ServiceDetail />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },
            {
                path: "/expertise",
                element: <Expertise />
            },
            {
                path: "/realisations",
                element: <Realisations />
            },
            {
                path: "/realisations/:slug",
                element: <ProjectDetail />
            },
            {
                path: "/references",
                element: <References />

            },
            {
                path: "/contact",
                element: <Contact />
            },



            {
                path: "*",
                element: <NotFound />,
            }

        ]
    }

]