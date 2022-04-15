import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EmailDashboard from "./components/EmailDashboard/EmailDashboard";
import Header from "./components/Header/Header";
import EmailInbox from "./screens/EmailInbox/EmailInbox";
import FavouriteEmails from "./screens/FavouriteEmails";

function App() {
  return (
    <>
      <Link to="/">
        <h2 className="heading">Email Inbox</h2>
      </Link>
      <Header />
      <Routes>
        <Route path="/" element={<EmailInbox />} />
        <Route path="/:emailId" element={<EmailDashboard />} />
        <Route path="/favourite" element={<FavouriteEmails />} />
      </Routes>
    </>
  );
}

export default App;
