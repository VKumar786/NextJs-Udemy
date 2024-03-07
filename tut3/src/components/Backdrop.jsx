import React from "react";

const Backdrop = (props) => {
  const { onCancel } = props;
  return <div className="backdrop" onClick={onCancel} />;
};

export default Backdrop;
