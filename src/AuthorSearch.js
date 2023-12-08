import { useState, useEffect } from "react";

const AuthorSearch = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "localhost:8000/analysis/upload/6568808a32d4a667f78b320b"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
        setAuthors(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once on component mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.authorId}>
            {/* Render author information here */}
            <p>{author.name}</p>
            <p>{author.publicationCount} publications</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorSearch;
