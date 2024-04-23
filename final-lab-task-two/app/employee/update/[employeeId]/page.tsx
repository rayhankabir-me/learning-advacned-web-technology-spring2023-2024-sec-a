export default function Update() {
  return (
    <form action="">
      <label className="block mb-3" htmlFor="name">
        Employee Name
      </label>
      <input className="py-2 px-3 mb-5" type="text" id="name" name="name" />
      <label className="block mb-3" htmlFor="company">
        Company Name
      </label>
      <input
        className="py-2 px-3 mb-5"
        type="text"
        name="company"
        id="company"
      />
      <label className="block mb-3" htmlFor="contact">
        Contact No
      </label>
      <input
        className="py-2 px-3 mb-5"
        type="text"
        name="contact"
        id="contact"
      />
      <label className="block mb-3" htmlFor="username">
        User Name
      </label>
      <input
        className="py-2 px-3 mb-5"
        type="text"
        name="username"
        id="username"
      />
      <label className="block mb-3" htmlFor="password">
        Password
      </label>
      <input
        className="py-2 px-3 mb-5"
        type="text"
        name="password"
        id="password"
      />
      <button className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Update
      </button>
    </form>
  );
}
