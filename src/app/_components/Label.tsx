
type LabelProps = {
    title:string,
    callback: Function
    errors:any
}

export default function Label({title, callback,errors}:LabelProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={title}>{title}</label>
      <input type="text" {...callback(title)} />
      <p>{errors.name.message}</p>
    </div>
  );
}
