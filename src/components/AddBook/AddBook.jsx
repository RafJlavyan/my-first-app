import { useState } from "react";
import styles from "./AddBook.module.css";
import axios from "axios";
import { baseURL } from "../../Constant";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "",
    aboutAuthor: "",
    description: "",
    price: "",
    photo: "",
    authorPhoto: "",
  });
  const navigate = useNavigate()
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in book) {
      if (!book[key]) {
        return setError(`${key} is required`);
      }
      if (key === "price" || key === "pages") {
        if (!Number.isInteger(+book[key])) {
          return setError(`${key} should be numeric`);
        }
      }
    }
    setError("");

    axios.post(baseURL, book).then((r) => {
      console.log(r.data);
      setBook({
        title: "",
        author: "",
        pages: "",
        aboutAuthor: "",
        description: "",
        price: "",
        photo: "",
        authorPhoto: "",
      });
      navigate("/books")
    });
  };

  return (
    <div className={styles.content}>
      <h3>Add Book</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {Object.keys(book).map((elm, index) => {
          return (
            <FormGroup
              key={index}
              title={elm}
              value={book[elm]}
              onChange={(e) => setBook({ ...book, [elm]: e.target.value })}
            />
          );
        })}
        <button className={styles.button}>save</button>
      </form>
    </div>
  );
};

const FormGroup = ({ title, onChange, value }) => {
  return (
    <div className={styles.group}>
      <label>{title}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default AddBook;
