"use client";
import React, { useState } from "react";
import axios from "axios";

interface IUser {
  name: string;
  email: string;
  text: string;
  phone: string;
}

export default function ModalRegistrationForm() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    text: "",
    phone: "",
  });

  console.log(user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", user);
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("ვერ ხერხდება:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="mt-10">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border border-gray-500 rounded-sm"
        />
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border border-gray-500 rounded-sm"
        />
        <input
          id="text"
          name="text"
          type="text"
          onChange={handleChange}
          placeholder="Text"
          className="p-2 border border-gray-500 rounded-sm"
        />
        <input
          id="phone"
          name="phone"
          type="tel"
          onChange={handleChange}
          placeholder="Your Phone"
          className="p-2 border border-gray-500 rounded-sm"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
