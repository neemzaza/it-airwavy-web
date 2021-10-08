import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import marked from "marked";
import axios from "axios";
import {Link} from "react-router-dom";
import $ from 'jquery'
import DocumentMeta from "react-document-meta"

const Pagearticle = () => {
  const { code, title, name } = useParams();
  const [articleData, setArticleData] = useState();
  const [allArticle, addArticle] = useState([]);

  const fetchArticle = async() => {
    await axios
    .get(`https://raw.githubusercontent.com/neemzaza/AirwavyWeb/main/${name}`)
    .then((res) => {
      console.log(res.data);
      setArticleData(marked(res.data));
      $("#loading").css("display", "none")
    });
  }

  const getArticlesPost = async () => {
    await axios
      .get("https://api.github.com/repos/neemzaza/AirwavyWeb/git/trees/main")
      .then((res) => {
        for (let i = 0; i < 2; i++) {
            if (res.data.tree[i].sha === code) continue;
          addArticle((allArticle) => [...allArticle, res.data.tree[i]]);
        }
        $("#loading").css("display", "none");

        // if (!allArticle) {
        //     console.log("NO DATA")
        // }
      });
  };

  const meta = {
    title: name,
    description: "นี่คือบทความของ Airwavy",
    canonical: "https://it-airwavy.herokuapp.com/articles/",
    meta: {
        charset: "utf-8",
        name: {
            keywords: "server,การเปิดเซิฟ,ploudos"
        }
    }
  };

  useEffect(() => {
    fetchArticle()
    getArticlesPost()
  }, []);
  return (
    <DocumentMeta {...meta}>
      <br />
      <div className="container">
        <div className="card article p-3">
          <div id="loading">
            <div className="card skeleton post-article pt-4">
              <div className="skeleton-content"></div>
              <br />
              <div className="skeleton-content"></div>

              <br />
            </div>
            <br />
          </div>
          <article dangerouslySetInnerHTML={{ __html: articleData }}></article>
        </div>
        <br />
        <div className="other-article">
            <h5>Another article you maybe want to read - บทความอื่นๆ ที่คุณอาจจะอยากอ่าน</h5>
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
          <Link class="btn btn-primary btn-sm " to="/articles" role="button">ดูบทความทั้งหมด</Link>
            </div>
        </div>
        <br/>
      </div>
    </DocumentMeta>
  );
};

export default Pagearticle;
