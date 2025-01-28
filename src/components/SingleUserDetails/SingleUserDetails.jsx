import React from "react";

function SingleUserDetails({ setFeaturedUser }) {
  return (
    <div>
      SingleUserDetails
      <button onClick={() => setFeaturedUser(null)}>Go Back</button>
    </div>
  );
}

export default SingleUserDetails;
