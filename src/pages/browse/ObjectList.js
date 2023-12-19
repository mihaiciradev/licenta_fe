import React from "react";

export default function ObjectList({ title, children }) {
  return (
    <div id="objectsList">
      <h3>{title}</h3>
      {/* <input placeholder="search by name" /> */}
      <div id="actual-list">{children}</div>
    </div>
  );
}
