import React, { Component } from "react";
import TableRow from "../TableRow/TableRow";
import API from "../../utils/API";

class Table extends Component {
  state = {
    employees: {}
  };

  componentDidMount() {
    API.search("?results=100")
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.employees.results);
    const results = this.state.employees.results
    console.log(results)
    // const employeesList = results.forEach((e, index) => (
    //   <TableRow
    //     key={index}
    //     imageURL={e.picture.thumbnail}
    //     name={e.name.first + e.name.last}
    //     phone={e.phone}
    //     email={e.email}
    //     DOB={e.dob}
    //   />
    // ));
    return (
      <div>
        <table className="table table-striped table-ho">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {/* {employeesList} */}
            <TableRow
              imageURL={""}
              name={"Ashley"}
              phone={"765-253-9964"}
              email={"AshleyLove@love.com"}
              DOB={"11/13/1986"}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
