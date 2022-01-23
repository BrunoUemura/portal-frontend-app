const tableHeader = ["Expense", "Amount", "Month", "Year", "Category"];

export default function TableHeader() {
  return (
    <thead className="w-full bg-gray-800">
      <tr className="w-full bg-gray-800">
        {tableHeader.map((theader) => (
          <th
            scope="col"
            className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
            {theader}
          </th>
        ))}
        <th scope="col" className="relative px-6 py-4">
          <span className="sr-only">Edit</span>
        </th>
        <th scope="col" className="relative px-6 py-4">
          <span className="sr-only">Remove</span>
        </th>
      </tr>
    </thead>
  );
}
