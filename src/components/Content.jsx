import axios from "axios";
import React from "react";
import Pagination from "./Pagination";

import Posts from "./Posts";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],

      currentPage: 1,
      postsPerPage: 10,
      loading: false,
    };
  }

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get("https://9gag.com/v1/featured-posts");
      console.log(results.data.data.items);
      console.log(results.data.data.items, "result");
      this.setState({ posts: results.data.data.items });
      this.setState({ loading: false });
    };
    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div style={{ width: "90%" }}>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    );
  }
}
