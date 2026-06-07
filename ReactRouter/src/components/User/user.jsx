import React from "react";
import { useParams } from "react-router";

function user() {
  const { user_id } = useParams();
  return <div className="bg-gray-600 text-white p-3 text-3xl">User: {user_id}</div>;
}

export default user;
