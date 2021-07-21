export default function ExtraInfo({ company }) {
  return (
    <div className="flex flex-col">
      <div className="py-2 align-middle inline-block w-full m-auto sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Industry
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  money raised
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  market cap
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  annual revenue
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  number of employees
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr key={company.id}>
                <td className="p-10">
                  <div className="flex items-center flex-shrink-0 h-10 w-10">
                    <div className="text-sm text-gray-900">{company.category.industry || "---"}</div>
                  </div>
                </td>
                <td className="p-10">
                  <div className="text-sm text-gray-900">{company.metrics.raised || "---"}</div>
                </td>
                <td className="p-10">
                  <div className="text-sm text-gray-900">{company.metrics.marketCap || "---"}</div>
                </td>
                <td className="p-10">
                  <div className="text-sm text-gray-900">{company.metrics.annualRevenue || "---"}</div>
                </td>
                <td className="p-10">
                  <div className="text-sm text-gray-900">{company.location || "---"}</div>
                </td>
                <td className="p-10">
                  <div className="text-sm text-gray-900">{company.metrics.employees || "---"}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
