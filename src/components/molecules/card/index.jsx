export default function Card(props) {
  const { count, title } = props;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h1 className="mb-5">{title}</h1>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}
