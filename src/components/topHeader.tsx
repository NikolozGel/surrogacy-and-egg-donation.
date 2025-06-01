// "use client";
import { MdPhone } from "react-icons/md";
import { useTranslations } from "next-intl";
// import { Modal } from "antd";
// import { useState } from "react";
// import ModalRegistrationForm from "./modalRegistrationForm";
// import Register from "@/app/[locale]/pages/page";

export default function TopHeader() {
  const t = useTranslations("homePage");
  // const [showForm, setShowForm] = useState(false);

  // ღილაკზე დაჭერის ფუნქცია
  // const toggleForm = () => {
  //   setShowForm(!showForm);
  // };

  return (
    <div className="bg-[#FFBF9E] py-2.5 lg:flex px-16 items-center justify-evenly hidden">
      <h2 className="text-lg">{t("topHeaderTitle")}</h2>
      <div className="flex items-center gap-5">
        <button className="h-11 w-48 rounded-full text-lg flex items-center justify-center gap-0.5 text-black cursor-pointer">
          <MdPhone color="black" />

          <a href="https://wa.me/995599240041" target="_blank">
            +995 599 24 00 41
          </a>
        </button>
        <button className="h-11 w-48 rounded-full text-lg flex items-center justify-center gap-0.5 text-black cursor-pointer">
          <MdPhone color="black" />{" "}
          <a href="https://wa.me/995511106081" target="_blank">
            +995 511 10 60 81
          </a>
        </button>
        {/* <button
          className="bg-teal-700 h-11 w-48 rounded-full text-lg flex items-center justify-center gap-0.5 text-white cursor-pointer hover:opacity-85"
          onClick={toggleForm}
        >
          {t("register")}
        </button> */}
      </div>
      {/* 
      <Modal
        footer={false}
        width={700}
        open={showForm}
        onOk={() => setShowForm(false)}
        onCancel={() => setShowForm(false)}
      >
        <Register />
      </Modal> */}
    </div>
  );
}
