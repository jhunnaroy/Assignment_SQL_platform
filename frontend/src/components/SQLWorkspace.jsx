
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import ResultPanel from "./ResultPannel";

const SQLWorkspace = () => {
  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const res = await API.get(`/assignments/${id}`);
        setAssignment(res.data.data);
      } catch (err) {
        setError("Failed to load assignment");
      }
    };

    fetchAssignment();
  }, [id]);

  const runQuery = async () => {
    try {
      const res = await API.post("/run-query", {
        query,
        assignmentId: id,
      });

      setResult(res.data.rows || []);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Query Error");
    }
  };

  if (error) return <h3 style={{ padding: "40px" }}>{error}</h3>;
  if (!assignment) return <h3 style={{ padding: "40px" }}>Loading...</h3>;

  return (
    <div className="workspace">
      <h2>{assignment.title}</h2>
      <p>{assignment.description}</p>

      <textarea
        rows="6"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Write SQL query here..."
      />

      <button onClick={runQuery}>Run Query</button>

      <div className="result-container">
        <ResultPanel data={result} />
      </div>
    </div>
  );
};

export default SQLWorkspace;