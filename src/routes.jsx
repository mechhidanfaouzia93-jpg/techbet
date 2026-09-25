
import home from "./layouts/pages/Home";
import about from "./layouts/pages/About";
import faq from "./layouts/pages/Faq";
import notFound from "./layouts/pages/NotFound";
import App from "./App";


export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            }, {
                path: "/about",
                element: <About />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },



            {
                path: "*",
                element: <NotFound />,
            }

        ]
    }

]