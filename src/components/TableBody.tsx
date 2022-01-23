type ExpenseProps = {
  title: string;
  amount: number;
  month: number;
  year: number;
  category: string;
};

export default function TableBody({
  title,
  amount,
  month,
  year,
  category,
}: ExpenseProps) {
  return (
    <table className="shadow-lg">
      <tbody className="bg-white divide-gray-200">
        <tr className="">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {title}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            R$ {amount.toFixed(2)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {month}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {year}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {category}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-red-600 hover:text-red-900">
              Remove
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
