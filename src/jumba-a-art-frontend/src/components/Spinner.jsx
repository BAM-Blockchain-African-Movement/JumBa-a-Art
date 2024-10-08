import React from 'react'
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({loading}) => {
  return (
    <ClipLoader
      color="#ff8c27"
      loading={loading}
      cssOverride={override}
      size={50}
    />
  )
}

export default Spinner