import React from "react";

function PAlert({ msg, color }) {
  return <p className={`alert alert-${color}`}>{msg}</p>;
}

export default PAlert;
