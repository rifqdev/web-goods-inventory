import Image from "next/image";

export default function Eye(props) {
  const { showPassword, handleShowPassword } = props;
  return (
    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={handleShowPassword}>
      {showPassword ? <Image src="/eye-on.svg" alt="eye" width={20} height={20} /> : <Image src="/eye-off.svg" alt="eye" width={20} height={20} />}
    </div>
  );
}
