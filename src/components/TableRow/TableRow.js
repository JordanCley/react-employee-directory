import React from "react";


function TableRow(props) {
  return (
    <>
      <tr>
        <td>
          <img src={props.imageURL} alt="" />
        </td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.DOB.date.split("-")[1] + "-" + props.DOB.date.split("-")[2].slice(0,2) + "-" + props.DOB.date.split("-")[0]}</td>
      </tr>
    </>
  );
}

export default TableRow;
