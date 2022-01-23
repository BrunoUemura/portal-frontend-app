import Router from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { Authentication } from "../../services/Authentication";

type RegistrationType = {
  username: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async ({
    username,
    email,
    password,
  }: RegistrationType) => {
    await Authentication.register(username, email, password);
    Router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Register
          </div>

          <div className="mb-6">
            <label>Username</label>
            <input
              {...register("username")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="JhonDoe"
            />
          </div>

          <div className="mb-6">
            <label>Email</label>
            <input
              {...register("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="jhon@doe.com"
            />
          </div>

          <div className="mb-6">
            <label>Password</label>
            <input
              {...register("password")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="**********"
            />
          </div>

          <div className="flex justify-between items-center">
            <button className="rounded-md py-2 px-4 bg-blue-500 text-white hover:bg-blue-700">
              Sign Up
            </button>

            <a className="text-blue-500 hover:text-blue-800" href="/login">
              Already registered?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
