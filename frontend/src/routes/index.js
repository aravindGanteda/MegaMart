import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";

// Lazy load pages
import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const SignUp = lazy(() => import("../pages/SignUp"));
const AdminPannel = lazy(() => import("../pages/AdminPannel"));
const AllUsers = lazy(() => import("../pages/AllUsers"));
const AllProducts = lazy(() => import("../pages/AllProducts"));
const CategoryProduct = lazy(() => import("../pages/CategoryProduct"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const SearchProduct = lazy(() => import("../pages/SearchProduct"));

// Loading fallback component
const Loader = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "sign-up",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "product-category",
        element: (
          <Suspense fallback={<Loader />}>
            <CategoryProduct />
          </Suspense>
        ),
      },
      {
        path: "admin-panel",
        element: (
          <Suspense fallback={<Loader />}>
            <AdminPannel />
          </Suspense>
        ),
        children: [
          {
            path: "all-users",
            element: (
              <Suspense fallback={<Loader />}>
                <AllUsers />
              </Suspense>
            ),
          },
          {
            path: "all-products",
            element: (
              <Suspense fallback={<Loader />}>
                <AllProducts />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<Loader />}>
            <SearchProduct />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
