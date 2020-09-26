import React from "react";

const Debug = ({ debug }) => {
  return <pre>{JSON.stringify(debug, null, 2)}</pre>;
};
export default Debug;
