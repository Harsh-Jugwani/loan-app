import { createBrowserRouter } from "react-router-dom";
import LoanApplicationForm from "./LoanApplicationForm";
import { RouterProvider } from "react-router-dom";
import ApplicationStatus from "./ApplicationStatus";
import LoanPay from "./LoanPay";
import Login from "./Login";
import Admin from "./Admin";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoanApplicationForm />,
    },
    {
      path: "/submitted",
      element: <ApplicationStatus/>
    },
    {
      path: "/loanpay",
      element: <LoanPay/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/admin",
      element: <Admin/>
    },
   
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;