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
        <td>{props.DOB}</td>
      </tr>
    </>
  );
}

export default TableRow;
