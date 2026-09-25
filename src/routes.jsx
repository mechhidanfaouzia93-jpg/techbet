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