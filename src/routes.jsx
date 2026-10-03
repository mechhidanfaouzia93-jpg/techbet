
import Home from "./layouts/pages/Home";
import Services from "./layouts/pages/Services";
import About from "./layouts/pages/About";
import Faq from "./layouts/pages/Faq";
import NotFound from "./layouts/pages/NotFound";
import Expertise from "./layouts/pages/Expertise";
import Realisations from "./layouts/pages/Realisations";
import ProjectDetail from "./layouts/pages/ProjectDetail";
import References from "./layouts/pages/References";
import Contact from "./layouts/pages/Contact";
import HVAC from "./layouts/pages/services/HVAC";
import Electricite from "./layouts/pages/services/Electricite";
import PlomberieSanitaire from "./layouts/pages/services/PlomberieSanitaire";
import DetectionIncendie from "./layouts/pages/services/DetectionIncendie";
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
                path: "/services/hvac",
                element: <HVAC />
            },
            {
                path: "/services/electricite",
                element: <Electricite />
            },
            {
                path: "/services/plomberie-sanitaire",
                element: <PlomberieSanitaire />
            },
            {
                path: "/services/detection-incendie",
                element: <DetectionIncendie />
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