import Link from "next/link";

export default function List({ values }) {
  return (
    <div className="flex flex-col">
      <div className="py-2 align-middle inline-block w-2/3 m-auto sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 sr-only">
                  Logo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th scope="col" className="px-6 py-3 sr-only">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {values.map((company) => (
                <tr key={company.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={company.logo} alt="" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{company.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{company.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/company?domain=${company.domain}`}>
                      <div className="text-sm text-green-600 hover:text-green-500 cursor-pointer">
                        Click to see more info
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
