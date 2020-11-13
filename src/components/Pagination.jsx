import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Pagination extends Component {
  render() {
    const {
      postsPerPage,
      totalPosts,
      paginate,
      nextPage,
      prevPage,
    } = this.props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center py-5">
          <li className="page-item">
            <Link className="page-link" href="#" onClick={() => prevPage()}>
              Previous
            </Link>
          </li>
          {pageNumbers.map((num) => (
            <li className="page-item" key={num}>
              <Link
                onClick={() => paginate(num)}
                href="#"
                className="page-link"
              >
                {num}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link className="page-link" href="#" onClick={() => nextPage()}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
