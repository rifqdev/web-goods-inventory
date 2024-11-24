"use client";

import { useState } from "react";
import InputMolecules from "@/components/molecules/form-field";
import InputPasswordMolecules from "@/components/molecules/form-field-password";
import Button from "@/components/atoms/button";

export default function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <InputMolecules type="email" placeholder="Email" />
      <InputPasswordMolecules showPassword={showPassword} handleShowPassword={handleShowPassword} />
      <Button className="w-full p-2 rounded-md bg-black text-white">Login</Button>
    </form>
  );
}
