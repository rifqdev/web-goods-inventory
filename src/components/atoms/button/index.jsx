export default function Button(props) {
  const { children, className, onClick } = props;
  return (
    <button type="submit" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
