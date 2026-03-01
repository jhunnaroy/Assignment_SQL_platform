const ResultPanel = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }

  const keys = Object.keys(data[0]);

  return (
    <table className="result-table">
      <thead>
        <tr>
          {keys.map((k) => (
            <th key={k}>{k}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {keys.map((k) => (
              <td key={k}>{row[k]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultPanel;