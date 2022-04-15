import React from "react";
import "./EmailBody.css";
import Loader from "react-spinner-loader";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/slices/emailSlice";
import { useInFav } from "../../customHooks/useIsInFav";

const EmailBody = ({ emailBody }) => {
  const { isInFav } = useInFav(emailBody.id);
  const { emailBodyPending } = useSelector((state) => state.email);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (isInFav) {
      dispatch(removeFromFav({ id: emailBody.id }));
    } else {
      dispatch(addToFav({ id: emailBody.id }));
    }
  };

  return (
    <>
      <div className="email-body">
        <div className="email-body-avatar">
          <div className="avatar">F</div>
        </div>
        <div className="email-body-content">
          <div className="email-body-content-top">
            <h2>Lorem Ispum</h2>
            <button className="fav-btn" onClick={handleClick}>
              {isInFav ? "Remove from fav" : "Mark as fav"}
            </button>
          </div>
          <Loader show={emailBodyPending} />
          <h4>{emailBody.id}</h4>
          <div dangerouslySetInnerHTML={{ __html: emailBody["body"] }}></div>
        </div>
      </div>
    </>
  );
};

export default EmailBody;
