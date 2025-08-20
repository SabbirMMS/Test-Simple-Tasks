/* eslint-disable react/prop-types */
const TableRaw = ({ row }) => {
  return (
    <tr>
      <td className="border px-2 py-1">{row.name}</td>
      <td className="border px-2 py-1">{JSON.stringify(row.values)}</td>
    </tr>
  );
};

export default TableRaw;
