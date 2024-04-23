import Link from "next/link";

export default function Employee() {
  return (
    <div className="py-40 px-40">
      <form action="">
        <input
          className="py-2 px-3 mb-5"
          type="search"
          id="search"
          name="search"
        />

        <button className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Search
        </button>
      </form>
      <h3 className="mb-10 mt-10">Employee List</h3>
      <ul>
        <li className="flex items-center mb-4">
          Employee 1
          <Link
            href="/update/"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </Link>
          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
        </li>
        <li className="flex items-center mb-4">
          Employee 2
          <Link
            href="/update/"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </Link>
          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
        </li>
        <li className="flex items-center mb-4">
          Employee 3
          <Link
            href="/update/"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </Link>
          <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
