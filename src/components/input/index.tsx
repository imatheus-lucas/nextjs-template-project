type InputProps = JSX.IntrinsicElements["input"] & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="p-2 bg-gray-100 rounded-md">
      <label>{label}</label>
      <input {...props} placeholder="Write..." />
    </div>
  );
}
