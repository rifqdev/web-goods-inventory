export default function LoginTemplate(props) {
  const { title, children } = props;
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 rounded-md bg-slate-100">
      <div className="bg-white p-4 rounded-md max-w-md w-full border border-gray-300 shadow-md py-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">{title}</h1>
        {children}
      </div>
    </div>
  );
}
