import { createBrowserRouter } from "react-router-dom";
import LoanApplicationForm from "./LoanApplicationForm";
import { RouterProvider } from "react-router-dom";
import ApplicationStatus from "./ApplicationStatus";
import LoanPay from "./LoanPay";


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
   
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;