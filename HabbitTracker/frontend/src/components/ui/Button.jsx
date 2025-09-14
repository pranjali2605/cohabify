export default function Button({ children, variant = "primary", onClick }) {
  const base = "w-full py-2 rounded-lg transition";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-gray-300 hover:bg-gray-100 text-gray-700",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
