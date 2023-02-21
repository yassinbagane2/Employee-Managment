import React from "react";

const Table: React.FC = () => {
  return (
    <table className="w-full border px-4">
      <thead className="text-left h-8">
        <tr className="bg-gray-50 border-b">
          <th className="p-2">Id</th>
          <th className="p-2">Name</th>
          <th className="p-2">Departement</th>
          <th className="p-2">Employment Date</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:cursor-pointer">
          <td className="py-3 border-b px-2">1</td>
          <td className="py-3 border-b px-2">Yassin Bagane</td>
          <td className="py-3 border-b px-2">Frontend</td>
          <td className="py-3 border-b px-2">12/10/2022</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
