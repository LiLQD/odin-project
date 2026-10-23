import Home from "./component/Home";
import Cart from "./component/Cart";
import ErrorPage from "./component/ErrorPage";
import Product from "./component/Product";
import Category from "./component/Category";
import ItemDetail from "./component/ItemDetail";
import ProductIndex from "./component/ProductIndex";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Product />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductIndex />,
      },
      {
        path: ":category",
        element: <Category />,
      },
      {
        path: ":category/:index",
        element: <ItemDetail />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
export default routes;
