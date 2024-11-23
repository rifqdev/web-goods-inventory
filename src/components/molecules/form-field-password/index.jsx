import Input from "@/components/atoms/input";
import Eye from "@/components/atoms/eye";

export default function InputPasswordMolecules(props) {
  const { showPassword, handleShowPassword } = props;
  return (
    <div className="mb-4 relative">
      <Input type={showPassword ? "text" : "password"} placeholder="Password" />
      <Eye showPassword={showPassword} handleShowPassword={handleShowPassword} />
    </div>
  );
}
