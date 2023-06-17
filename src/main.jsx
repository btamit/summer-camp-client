import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import LoadingSpinner from "./components/LoadingSpinner";
import Instructors from "./components/Instructors";
import Classes from "./components/Classes";
import {HelmetProvider } from "react-helmet-async";
// import PrivateRoute from "./components/PrivateRoute";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Dashboard from "./components/Dashboard";
import MyCart from "./components/MyCart";
import PrivateRoute from "./components/PrivateRoute";
import AllUsers from "./components/AllUsers";
import ManageClass from "./components/ManageClass";
import AdminRoute from "./components/AdminRoute";
import AddClass from "./components/AddClass";
import Payment from "./components/Payment";
import UserHome from "./components/UserHome";
import AdminHome from "./components/AdminHome";
import EnrolledClass from "./components/EnrolledClass";
import PaymentHistory from "./components/PaymentHistory";
import MyClass from "./components/MyClass";
import TeacherHome from "./components/TeacherHome";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "enrolledclass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path:'myclass',
        element:<MyClass></MyClass>
      },
      {
        path:'teacherhome',
        element:<TeacherHome></TeacherHome>
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <AdminRoute>
            <AddClass></AddClass>
          </AdminRoute>
        ),
      },
      {
        path: "addaclass",
        element: <AddClass></AddClass>
      },
      {
        path: "manageaclass",
        element: (
            <ManageClass></ManageClass>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>
);
