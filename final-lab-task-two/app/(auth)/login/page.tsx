export default function Login() {
  return (
    <div className="py-40 px-40">
      <h3 className="mb-10">Login Here</h3>
      <form action="">
        <label className="block mb-3" htmlFor="username">
          Username
        </label>
        <input
          className="py-2 px-3 mb-5"
          type="text"
          id="username"
          name="username"
        />
        <label className="block mb-3" htmlFor="password">
          Password
        </label>
        <input
          className="py-2 px-3 mb-5"
          type="password"
          name="password"
          id="password"
        />
        <button className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
