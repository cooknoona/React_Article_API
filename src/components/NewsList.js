import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    // 비동기 async 선언
    const fetchData = async () => {
      try {
        // 외부 API 데이터를 호출할때 데이터량, 연결에 따라 언제 호출될지 모르니 대기 시켜 놓는 await
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7");
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    // API가 호출 될때 Data를 fetch한다.
    fetchData();
  }, []);

  return <NewsListBlock>{articles && articles.map((article, index) => <NewsItem key={index} article={article} />)}</NewsListBlock>;
};
export default NewsList;
