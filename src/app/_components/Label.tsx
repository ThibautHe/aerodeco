
type LabelProps = {
    title:string,
}

export default function Label({title}:LabelProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={title}>{title}</label>
      <input type="text" name={title} />
    </div>
  );
}
