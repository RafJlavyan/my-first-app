import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../Constant";
import styles from "./BookList.module.css";
import BookItem from "../BookItem/BookItem";

const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((r) => {
      setBooks(r.data.items);
    });
  }, []);
  return (
    <div className={styles.content}>
      <h3>Book List</h3>
      <div className={styles.books}>
        {books.map((elm) => (
        <BookItem key={elm.id} {...elm} />
      ))}
      </div>
      
    </div>
  );
};

export default BookList;
