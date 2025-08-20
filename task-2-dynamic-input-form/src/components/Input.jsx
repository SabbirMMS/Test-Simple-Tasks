/* eslint-disable react/prop-types */

const Input = ({ inputs, input, handleChange, handleRemove }) => {
  return (
    <div>
      <div className="flex gap-2 mb-2 items-center">
        <input
          type="text"
          placeholder="User Name"
          value={input.name}
          onChange={(e) => handleChange(input.id, "name", e.target.value)}
          className="border px-2 py-1 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Values (comma separated)"
          value={input.values}
          onChange={(e) => handleChange(input.id, "values", e.target.value)}
          className="border px-2 py-1 rounded w-1/2"
        />
        <button
          onClick={() => handleRemove(input.id)}
          className="bg-gray-100 px-2 py-1 rounded text-red-600 hover:bg-gray-200"
          disabled={inputs.length === 1}
          title="Remove"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default Input;
