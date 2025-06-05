"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// ✅ Schema validation with Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
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

export default function ModalRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // enables real-time validation
  });

  const [successMessage, setSuccessMessage] = React.useState("");

  const onSubmit = async (data: FormData) => {
    // 🛡️ Extra check to block submission if invalid
    if (!isValid) return;

    try {
      await axios.post("/api/saveData", data);
      setSuccessMessage("Thank you! We will contact you as soon as possible.");
      reset();
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="mt-10">
      {/* ✅ Preserving original text content */}
      <div className="mb-8 bg-blue-50 p-4 rounded shadow">
        <h2 className="text-2xl font-semibold text-gray-700">
          Together We Create Hope
        </h2>
        <p className="mt-2 text-gray-700 text-lg">
          Infertility can be a difficult and emotional journey, but you are not
          alone. Every step forward brings new possibilities and renewed hope.
        </p>
        <p className="mt-2 text-gray-700 text-lg">
          Through the kindness of donation and the generosity of surrogacy,
          families are born and lives are transformed.
        </p>
        <p className="mt-2 text-gray-700 text-lg">
          Your involvement means more than you know — it’s a gift of compassion,
          strength, and new beginnings.
        </p>
        <p className="mt-2 text-gray-700 text-lg">
          By taking this step, you can make a lasting difference in someone’s
          life and help build a future filled with love.
        </p>
        <p className="mt-2 text-gray-700 text-lg">
          Complete the form below to join us in creating miracles, one life at a
          time.
        </p>
      </div>

      {successMessage ? (
        <h3 className="text-center text-lg text-green-600">{successMessage}</h3>
      ) : (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            {errors.name && (
              <p className="text-gray-600 text-md mt-1">
                {errors.name.message}
              </p>
            )}
            <input
              {...register("name")}
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-sm outline-none w-full"
            />
          </div>

          <div>
            {errors.email && (
              <p className="text-gray-600 text-md mt-1">
                {errors.email.message}
              </p>
            )}
            <input
              {...register("email")}
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-sm outline-none w-full"
            />
          </div>

          <div>
            {errors.phone && (
              <p className="text-gray-600 text-md mt-1">
                {errors.phone.message}
              </p>
            )}
            <input
              {...register("phone")}
              placeholder="Your Phone"
              className="p-3 border border-gray-300 rounded-sm outline-none w-full"
            />
          </div>

          <div>
            {errors.text && (
              <p className="text-gray-600 text-md mt-1">
                {errors.text.message}
              </p>
            )}
            <input
              {...register("text")}
              placeholder="Text"
              className="p-3 border border-gray-300 rounded-sm outline-none w-full"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="p-2 bg-blue-500 text-lg text-white rounded-full w-[200px] hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
