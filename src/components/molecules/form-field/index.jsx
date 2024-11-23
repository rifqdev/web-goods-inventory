import Input from "@/components/atoms/input";

export default function InputMolecules(props) {
  const { type, placeholder } = props;
  return (
    <div className="mb-4">
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
