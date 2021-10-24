import React, { useState, useEffect } from "react";
import "./OpArticle";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";

const Article = () => {
  const [allArticle, addArticle] = useState([]);
  const [pageNum, addPageNum] = useState(0);
  const [limitNum, addLimitNum] = useState(22);
  const [titleResult, setTitleResult] = useState([]);
  const addPageCount = 20;

  const getArticlesPost = async() => {
    $("#loading").css("display", "block");
    await axios
    .get("https://api.github.com/repos/neemzaza/AirwavyWeb/git/trees/main")
    .then((res) => {
        addLimitNum(res.data.tree.length)

        for (let i = pageNum; i < (pageNum + addPageCount > res.data.tree.length ? res.data.tree.length : pageNum + addPageCount); i++) {
            addArticle((allArticle) => [...allArticle, res.data.tree[i]]);
            addPageNum(pageNum + addPageCount)
        }
        $("#loading").css("display", "none");
    });
  }

  const whenPageCountFetchNotOverLimit = () => {
      if (pageNum < limitNum) return <a class="btn btn-primary btn-sm " onClick={() => getArticlesPost()} href="#" role="button">ดูบทความเพิ่มเติม</a>
      else return <a class="btn btn-disabled btn-sm " role="button">บททั้งหมดมีแค่ {limitNum} บทความ คุณได้สำรวจหมดแล้ว!</a>
  }

  useEffect(() => {
    getArticlesPost();
  }, []);
  return (
    <div>
      <div className="article pt-4">
        <div className="container">
          <h1>Airwavy's Articles - บทความของ Airwavy</h1>
          <hr className="notEffect" />
          {/* <div className="loading"></div> */}
          <p>ALL ARTICLES - บทความทั้งหมด</p>
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
          <div id="loading">
            <div className="card skeleton post-article pt-4">
              <div className="skeleton-content"></div>
              <br />
              <div className="skeleton-content"></div>

              <br />
            </div>
            <br/>
          </div>
          {whenPageCountFetchNotOverLimit()}
          <br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
