import React, { useState } from "react";
import "./EmailCard.css";
import Moment from "react-moment";
import { useInFav } from "../../customHooks/useIsInFav";
import { Link } from "react-router-dom";
import { addToFav, removeFromFav } from "../../redux/slices/emailSlice";
import { useDispatch } from "react-redux";

const EmailCard = ({ email, cardStyles }) => {
  const [read, setRead] = useState(false);
  const { isInFav } = useInFav(email.id);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (isInFav) {
      dispatch(removeFromFav({ id: email.id }));
    } else {
      dispatch(addToFav({ id: email.id }));
    }
  };

  const readHandler = () => {
    setRead(true);
  };

  return (
    <>
      <div
        className="email-card"
        style={{
          fontSize: `${cardStyles.fontSize}`,
          backgroundColor: `${
            read ? "var(--read-background)" : "var(--background-color)"
          }`,
        }}>
        <div className="email-card-avatar">
          <Link to={`/${email?.id}`}>
            <div
              className="avatar"
              onClick={readHandler}
              style={{
                width: `${cardStyles.width}`,
                height: `${cardStyles.height}`,
                lineHeight: `${cardStyles.lineHeight}`,
              }}>
              {email?.from?.name.charAt(0).toUpperCase()}
            </div>
          </Link>
        </div>
        <div className="email-card-content">
          <div className="email-card-content-top">
            <p>
              From:{" "}
              <span className="bold-text">
                {email?.from?.name} &lt;{email?.from?.email}&gt;
              </span>{" "}
            </p>
            <p>
              Subject: <span className="bold-text">{email?.subject}</span>
            </p>
          </div>
          <div className="email-card-content-bottom">
            <p>{email.short_description}</p>

            <small>
              <Moment format="YYYY/MM/DD">{email?.date}</Moment>{" "}
              <Moment format="hh:mm">{email?.date}</Moment>{" "}
            </small>
            <span className="fav-action" onClick={() => clickHandler()}>
              {isInFav ? "UnFav" : "Fav"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailCard;
