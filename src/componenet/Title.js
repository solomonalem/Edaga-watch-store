import React from "react";

export default function Title({ name, title }) {
  return (
    <div>
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h4
          className="text-capitalize font-weight-bold"
          style={{ paddingBottom: "1rem" }}
        >
          {name} <strong className="text-blue">{title}</strong>
        </h4>
      </div>
    </div>
  );
}
