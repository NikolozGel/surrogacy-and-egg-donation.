"use client";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useState } from "react";
import axios from "axios";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  text: string;
}

export default function ModalRegistrationForm() {
  const t = useTranslations("modal");
  const [showSuccess, setShowSuccess] = useState(false);

  async function sendFormData(data: IFormData) {
    // console.log(data);
    await axios.post("/api/submitForm", data);
    await axios.post("/api/nodemailer", data);
  }

  const { mutate } = useMutation({
    mutationFn: (data: IFormData) => sendFormData(data),
  });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setShowSuccess(true);
    const formData = new FormData(event.currentTarget);
    const rawFormData: IFormData = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      text: (formData.get("text") as string) || "",
      country: (formData.get("country") as string) || "",
    };

    mutate(rawFormData);
  }

  return (
    <div className="mt-5">
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
      {showSuccess ? (
        <p className="text-[#00AE8A] text-lg p-4 font-semibold">
          Sent successfully!
        </p>
      ) : (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* name input */}
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-sm outline-none w-full"
          />

          {/* email input */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-sm outline-none w-full"
          />

          {/* phone input */}
          <input
            name="phone"
            type="tel"
            placeholder="Your Phone (with country code)"
            className="p-3 border border-gray-300 rounded-sm outline-none w-full"
          />

          {/* country input */}
          <input
            name="country"
            type="text"
            placeholder="Your country"
            className="p-3 border border-gray-300 rounded-sm outline-none w-full"
          />

          {/* text input */}
          <input
            name="text"
            type="text"
            placeholder="Text"
            className="p-3 border border-gray-300 rounded-sm outline-none w-full"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="p-2 bg-[#10B981] text-lg text-white rounded-full w-[200px] transition cursor-pointer"
            >
              submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
