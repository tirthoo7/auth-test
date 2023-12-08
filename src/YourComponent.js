// src/components/YourComponent.js
import { useEffect, useState } from "react";
import { getPaperData } from "./api";

const YourComponent = () => {
  const [paperData, setPaperData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPaperData();
        setPaperData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {paperData.length > 0 && (
        <ul>
          {paperData.map((paper) => (
            <li key={paper.id}>{paper.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourComponent;
