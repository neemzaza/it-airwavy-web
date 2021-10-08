import React, { useState, useEffect } from "react";
import "./OpArticle";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";

const Article = () => {
  const [allArticle, addArticle] = useState([]);
  const [titleResult, setTitleResult] = useState([]);

  const getArticlesPost = async () => {
    await axios
      .get("https://api.github.com/repos/neemzaza/AirwavyWeb/git/trees/main")
      .then((res) => {
        for (let i = 0; i < res.data.tree.length; i++) {
          addArticle((allArticle) => [...allArticle, res.data.tree[i]]);
        }
        $("#loading").css("display", "none");

        // if (!allArticle) {
        //     console.log("NO DATA")
        // }
      });
  };

  useEffect(() => {
    getArticlesPost();
  }, []);
  return (
    <div>
      <div className="article pt-4">
        <div className="container">
          <h1>All article - บทความทั้งหมด</h1>
          <hr className="notEffect" />
          {/* <div className="loading"></div> */}
          <p>LATEST ARTICLE - บทความล่าสุด</p>
          <div id="loading">
            <div className="card skeleton post-article pt-4">
              <div className="skeleton-content"></div>
              <br />
              <div className="skeleton-content"></div>

              <br />
            </div>
            <br/>
          </div>
          <div className="row">
          {allArticle.map((val) => (
            <div className="col-sm-6">
              <Link
                className="card skeleton post-article pt-4"
                to={`/article/${val.path}/${val.sha}`}
              >
                <h4>{val.path}</h4>
                <label>โดย airwavy</label>
                <br />
              </Link>
              <br />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
