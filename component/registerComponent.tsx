"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface formDataInterface {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<formDataInterface>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError(null);

    console.log("Form submitted:", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // if (!isMounted) return null;

  return (
    <div>
      <div className="mb-4 text-center text-lg font-bold">
        Register for tutior{" "}
        <Link href="./studentReg" className="text-blue-600 underline">
          /student
        </Link>
      </div>


      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto my-12 p-6 border border-gray-300 rounded-lg bg-[#74d9ed]"
      >


        {/* Input Fields */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-black mb-2 font-medium">
            Name:
          </label>
          <input
            name="username"
            value={formData.username}
            type="text"
            placeholder="Enter your name"
            id="username"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2 font-medium">
            Email:
          </label>
          <input
            name="email"
            value={formData.email}
            type="email"
            placeholder="Enter your email"
            id="email"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-black mb-2 font-medium">
            Password:
          </label>
          <input
            name="password"
            value={formData.password}
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-black mb-2 font-medium"
          >
            Confirm Password:
          </label>
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            type="password"
            placeholder="Confirm your password"
            id="confirmPassword"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        <div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </div>

          <div className="text-black">
            <p>If you are already registered, please</p>
            {/* <span className="text-blue-700"> */}
            <Link href={"./loginPage"}>login</Link>
            {/* </span> */}
          </div>
        </div>

        {error && <p className="mt-4 text-black">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
