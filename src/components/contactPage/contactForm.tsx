"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  // gender: yup.string().required("Gender is required"),
  // birth: yup
  //   .date()
  //   .transform((value, originalValue) => {
  //     return originalValue ? new Date(originalValue) : null;
  //   })
  //   .typeError("Invalid date")
  //   .required("Date of Birth is required"),
  country: yup.string().required("Country is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(6, "Phone must be at least 6 digits"),
  text: yup
    .string()
    .required("Text is required")
    .min(3, "Text must be at least 3 characters"),
});
type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const onSubmit = async (data: FormData) => {
    if (!isValid) return;
    console.log(data);

    try {
      await axios.post("/api/monday", data);
      setSuccessMessage(true);
      reset();
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="relative">
      <form
        className="bg-gray-100 p-6 rounded-lg flex-1 shadow-md flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col">
              <label htmlFor="name">Enter Your Name</label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Enter your Name"
                className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A]"
              />
              {errors.name && (
                <p className="text-gray-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Your Email Address"
                className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A]"
              />
              {errors.email && (
                <p className="text-gray-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* <div className="flex flex-col">
              <label htmlFor="gender">Enter Your Gender</label>
              <input
                {...register("gender")}
                id="gender"
                type="text"
                placeholder="Enter your Gender"
                className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A]"
              />
              {errors.gender && (
                <p className="text-gray-600 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div> */}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col">
              <label htmlFor="phone">Phone</label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                placeholder="Enter your Phone"
                className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A]"
              />
              {errors.phone && (
                <p className="text-gray-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* <div className="flex flex-col">
              <label htmlFor="birth">Date Of Birth</label>
              <input
                {...register("birth")}
                id="birth"
                type="date"
                placeholder="Enter Date of Birth"
                className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A] text-gray-800 w-full"
              />
              {errors.birth && (
                <p className="text-gray-600 text-sm mt-1">
                  {errors.birth.message}
                </p>
              )}
            </div> */}

            <div className="flex flex-col">
              <label htmlFor="country">Country</label>
              <select
                {...register("country")}
                id="country"
                className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A] text-gray-800 w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
                {/* შეგიძლია დაამატო მეტი ქვეყანა ან ცალკე array-დან გააკეთო map() */}
              </select>
              {errors.country && (
                <p className="text-gray-600 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="text">Message</label>
          <textarea
            {...register("text")}
            id="text"
            rows={4}
            placeholder="Write your message..."
            className="bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00AE8A] resize-none"
          />
          {errors.text && (
            <p className="text-gray-600 text-sm mt-1">{errors.text.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="self-start px-6 py-2 bg-[#00AE8A] text-white rounded-lg hover:bg-[#008E8A] transition"
        >
          Send
        </button>

        {successMessage && (
          <p className="text-green-600 mt-4">
            Thank you for your message! We will get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
const countries = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Georgia",
  "India",
  "China",
  "Japan",
  "Italy",
  "Spain",
  "Canada",
  "Australia",
];
