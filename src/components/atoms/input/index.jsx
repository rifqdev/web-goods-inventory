export default function Input(props) {
  const { type, placeholder } = props;
  return <input type={type} placeholder={placeholder} className="w-full p-2 rounded-md border-2 border-gray-300 outline-none" />;
}
