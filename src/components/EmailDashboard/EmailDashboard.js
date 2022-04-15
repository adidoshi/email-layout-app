import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmailBody, getEmailList } from "../../services/apiCalls";
import EmailCard from "../EmailCard/EmailCard";
import Loader from "react-spinner-loader";
import "./EmailDashboard.css";
import EmailBody from "../EmailBody/EmailBody";
import { Outlet, useParams } from "react-router-dom";

const EmailDashboard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { emails, loading, emailBody } = useSelector((state) => state.email);
  useEffect(() => {
    dispatch(getEmailList());
    dispatch(getEmailBody({ id: params.emailId }));
  }, [dispatch, params.emailId]);

  const cardStyles = {
    height: "2rem",
    width: "2rem",
    lineHeight: "2rem",
    fontSize: "0.8rem",
  };
  return (
    <>
      <div className="container">
        <aside className="side-panel">
          <Loader show={loading} />
          {emails &&
            emails.map((email) => (
              <Fragment key={email?.id}>
                <EmailCard email={email} cardStyles={cardStyles} />
              </Fragment>
            ))}
        </aside>
        <section className="email-body-container">
          <EmailBody emailBody={emailBody} />
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default EmailDashboard;
