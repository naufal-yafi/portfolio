import { useState } from "react";

const useShowState = () => {
  const [show, setShow] = useState(false);

  const handleToggleShow = () => {
    setShow(!show);
  };

  return {
    show,
    handleToggleShow,
  };
};

export default useShowState;
