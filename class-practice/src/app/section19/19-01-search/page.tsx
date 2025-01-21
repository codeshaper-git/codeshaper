"use client"

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoardWithSearches($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    // 검색에서 refetch할 때, search 검색어가 refetch에 이미 저장되어 있는 상태이므로 추가로 search 포함하지 않아도 됨
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    refetch({ search, page: 1 });
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
