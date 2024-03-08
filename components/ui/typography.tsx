export function CH1({
  text,
  align,
  className,
}: {
  text: string;
  align?: any;
  className?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      style={{ textAlign: align }}
    >
      {text}
    </h1>
  );
}
export function CH2({
  text,
  align,
  className,
}: {
  text: string;
  align?: any;
  className?: string;
}) {
  return (
    <h2
      className={`scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl ${className}`}
      style={{ textAlign: align }}
    >
      {text}
    </h2>
  );
}
export function CH3({
  text,
  align,
  className,
}: {
  text: string;
  align?: any;
  className?: string;
}) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-medium tracking-tight lg:text-3xl ${className}`}
      style={{ textAlign: align }}
    >
      {text}
    </h3>
  );
}
