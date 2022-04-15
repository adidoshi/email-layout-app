import React from "react";
import { useSelector } from "react-redux";
import EmailCard from "../components/EmailCard/EmailCard";

const FavouriteEmails = () => {
  const { favourite } = useSelector((state) => state.email);
  const cardStyles = {
    height: "3.4rem",
    width: "3.4rem",
    lineHeight: "3.4rem",
    fontSize: "1rem",
  };

  return (
    <>
      <main>
        {favourite?.length === 0 ? (
          <h3 className="heading">Nothing to show - Add an email to fav</h3>
        ) : (
          favourite.map((email) => (
            <EmailCard key={email.id} email={email} cardStyles={cardStyles} />
          ))
        )}
      </main>
    </>
  );
};

export default FavouriteEmails;
