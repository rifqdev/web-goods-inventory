export default function Input(props) {
  let { type, placeholder, className } = props;
  className = className || "w-full p-2 rounded-md border-2 border-gray-300 outline-none";
  return <input type={type} placeholder={placeholder} className={className} />;
}
