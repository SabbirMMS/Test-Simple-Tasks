import { useState } from "react";
import Input from "./components/Input";
import TableRaw from "./components/TableRaw";

const App = () => {
  const [inputs, setInputs] = useState([
    { id: Date.now(), name: "", values: "" },
  ]);
  const [result, setResult] = useState([]);

  const handleChange = (id, field, value) => {
    setInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const handleAdd = () => {
    setInputs((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), name: "", values: "" },
    ]);
  };

  const handleRemove = (id) => {
    setInputs((prev) => prev.filter((input) => input.id !== id));
  };

  const handleResult = () => {
    const data = inputs
      .filter((input) => input.name.trim())
      .map((input) => ({
        name: input.name.trim(),
        values: input.values
          .split(",")
          .map((v) => v.trim())
          .filter((v) => v),
      }));
    setResult(data);
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <header>
        <h1 className="text-2xl font-bold">
          Task 2 - by{" "}
          <a
            href="https://sabbirmms.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sabbir MMS
          </a>
        </h1>
        <h3>dynamic input form</h3>
      </header>

      {/* INPUT SECTION */}
      <section className="w-full max-w-md my-6">
        {inputs.map((input) => (
          <Input
            key={input.id}
            inputs={inputs}
            input={input}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        ))}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleResult}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Result
          </button>
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add More
          </button>
        </div>
      </section>

      {/* RESULT SECTION */}
      <section className="w-full max-w-md mt-6">
        {result.length > 0 && (
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border px-2 py-1">User Name</th>
                <th className="border px-2 py-1">Values</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row, idx) => (
                <TableRaw key={idx} row={row} />
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default App;
