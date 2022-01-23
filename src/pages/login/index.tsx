import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (data: any) => {
    await signIn(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Login
          </div>

          <div className="mb-6">
            <label>Username</label>
            <input
              {...register("username")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="JhonDoe"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="mb-6">
            <label>Password</label>
            <input
              {...register("password")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="**********"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              className="rounded-md py-2 px-4 bg-blue-500 text-white hover:bg-blue-700"
              onClick={handleSignIn}
            >
              Sign In
            </button>

            <a className="text-blue-500 hover:text-blue-800" href="/register">
              Not registered yet?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
