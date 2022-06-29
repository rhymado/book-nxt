import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Card from "components/Card";
import { getAllBooks } from "modules/books/getBook";

import Layout from "components/Layout";

function Book() {
  const router = useRouter();
  const state = useSelector((state) => state);
  // console.log(state);
  const [books, setBooks] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [input, setInput] = useState({
    page: 1,
    limit: 4,
  });
  useEffect(() => {
    const getBookAsync = async () => {
      try {
        const response = await getAllBooks(input.page, input.limit);
        const bookList = response.data.list;
        const totalPage = response.data.meta.totalPage;
        setBooks(bookList);
        setTotalPage(totalPage);
      } catch (error) {
        console.error(error);
      }
    };
    getBookAsync();
  }, [input]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      router.replace("/login");
    }
  });
  return (
    <Layout title="Book List">
      <h1 className="title">Book</h1>
      {typeof totalPage === "number" && totalPage > 0 && (
        <select onChange={(e) => setInput({ ...input, page: e.target.value })}>
          {[...Array(totalPage)].map((_, idx) => (
            <option key={idx} value={idx + 1}>
              {idx + 1}
            </option>
          ))}
        </select>
      )}
      {Array.isArray(books) && books.length > 0
        ? books.map((book) => (
            <Card
              key={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              onClickHandler={() => router.push(`/book/${book.id}`)}
            />
          ))
        : "is loading"}
      <style jsx>{`
        .title {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}

export default Book;
