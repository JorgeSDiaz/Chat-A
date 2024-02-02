export default function Register() {
  return (
    <div className="bg-green-100 h-screen flex items-center">
      <form className="w-64 mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="block w-full rounded-md p-2 mb-2 border"
        />
        <input
          type="text"
          placeholder="Username"
          className="block w-full rounded-md p-2 mb-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full rounded-md p-2 mb-2 border"
        />
        <input
          type="password"
          placeholder="Verify password"
          className="block w-full rounded-md p-2 mb-2 border"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="block w-full rounded-md p-2 mb-2 border text-gray-400"
        />
        <button className="bg-green-500 text-white block w-full rounded-md p-2">
          Register
        </button>
      </form>
    </div>
  );
}
