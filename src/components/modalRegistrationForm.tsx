"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

import { useState } from "react";
import { useTranslations } from "next-intl";
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
  country: yup.string().required("Country is required"),
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

  const [successMessage, setSuccessMessage] = useState("");
  const t = useTranslations("modal");
  const onSubmit = async (data: FormData) => {
    // 🛡️ Extra check to block submission if invalid
    if (!isValid) return;

    try {
      await axios.post("/api/contact", data);
      await axios.post("/api/nodemailer", data);
      // ✅ Conversion event (არა პირადი მონაცემი)
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_submit",
          form_type: "modal_registration",
          locale:
            typeof navigator !== "undefined" ? navigator.language : undefined,
        });
      }

      setSuccessMessage("Thank you! We will contact you as soon as possible.");
      reset();
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="mt-5">
      {/* ✅ Preserving original text content */}
      <div className="mb-4 p-4">
        <h2 className="text-lg md:text-2xl font-semibold text-[#00AE8A]">
          {t("headline")}
        </h2>
        <p className="mt-2 text-gray-500 text-sm md:text-lg">
          {t("paragraph1")}
        </p>
        <p className="mt-2 text-gray-500 text-sm md:text-lg">
          {t("paragraph2")}
        </p>
      </div>

      {successMessage ? (
        <h3 className="text-center text-lg font-semibld text-[#00AE8A]">
          {successMessage}
        </h3>
      ) : (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {/* name input */}
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
          {/* email input */}
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
          {/* phone input */}
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
          {/* country input */}
          <div>
            {errors.country && (
              <p className="text-gray-600 text-md mt-1">
                {errors.country.message}
              </p>
            )}
            <input
              {...register("country")}
              placeholder="Your Country"
              className="p-3 border border-gray-300 rounded-sm outline-none w-full"
            />
          </div>
          {/* text input */}
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
          {/* submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="p-2 bg-[#10B981] hover:opacity-70 text-lg text-white rounded-full w-[200px]  transition cursor-pointer"
            >
              {t("button")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
