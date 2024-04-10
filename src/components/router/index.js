import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BeneficiaryForm from "../pages/Beneficiary";
import Dashboard from "../pages/Dashboard";
import EditForm from "../pages/Beneficiary/Edit";
import Details from "../pages/Beneficiary/Details";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/beneficiary" element={<BeneficiaryForm />} />
      <Route path="/beneficiaries/edit/:id" element={<EditForm />} />
      <Route path="/beneficiaries/details/:id" element={<Details />} />
    </Routes>
  );
}

export default Router;
