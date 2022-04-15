import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailCard from "../../components/EmailCard/EmailCard";
import { getEmailList } from "../../services/apiCalls";
import Loader from "react-spinner-loader";
import "./EmailInbox.css";

const EmailInbox = () => {
  const dispatch = useDispatch();
  const { emails, loading } = useSelector((state) => state.email);
  useEffect(() => {
    dispatch(getEmailList());
  }, [dispatch]);

  const cardStyles = {
    height: "3.4rem",
    width: "3.4rem",
    lineHeight: "3.4rem",
    fontSize: "1rem",
  };
  return (
    <>
      <main>
        <Loader show={loading} />
        {emails.map((email) => (
          <Fragment key={email.id}>
            <EmailCard email={email} cardStyles={cardStyles} />
          </Fragment>
        ))}
      </main>
    </>
  );
};

export default EmailInbox;
