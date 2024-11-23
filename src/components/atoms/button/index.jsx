export default function Button(props) {
  const { children } = props;
  return (
    <button type="submit" className="w-full p-2 rounded-md bg-black text-white">
      {children}
    </button>
  );
}
