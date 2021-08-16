import React from "react";

function NameList() {
  const names = ["Tony Stark", "Steve Rogers", "Thor", "Bruce Banner"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {/* <h2>{names[0]}</h2> */}
      {nameList}
    </div>
  );
}

export default NameList;
