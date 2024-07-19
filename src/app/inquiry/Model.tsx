"use client";
import { ReactNode, useState } from "react";

const Model = ({ isVisible, children }: IsvisibleType) => {
  if (!isVisible) {
    return null;
  }
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  function handleSave() {
    console.log("saved");
    event?.preventDefault();
    setName("");
    setEmail("");
    setMobile("");
    setDesc("");
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">{children}</div>
    </div>
  );
};

interface IsvisibleType {
  isVisible: boolean;
  children: ReactNode;
}

export default Model;
