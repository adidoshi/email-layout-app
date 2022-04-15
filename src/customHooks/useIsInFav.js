import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useInFav = (id) => {
  const { favourite } = useSelector((state) => state.email);
  const [isInFav, setIsInFav] = useState(false);

  // to check weather an email exist in the favourite array
  useEffect(() => {
    const findEmail = favourite.find((elem) => elem.id === id);
    if (findEmail) {
      setIsInFav(true);
    } else {
      setIsInFav(false);
    }
  }, [favourite, id]);
  return { isInFav };
};

export { useInFav };
