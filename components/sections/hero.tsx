import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  bg: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export default function Hero({
  buttonUrl,
  bg,
  title,
  subtitle,
  buttonText,
}: Props) {
  return (
    <div
      className={`hero py-6 h-[calc(100vh-112px)] select-none bg-${bg} bg-cover`}
    >
      <div className="hero-container container h-full flex items-center">
        <div className="hero-text flex flex-col gap-8 lg:w-4/5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
            {title}
          </h1>
          <h2 className="scroll-m-20 text-3xl font-extralight tracking-tight leading-snug lg:text-6xl">
            {subtitle}
          </h2>
          <Button
            type="button"
            variant="default"
            className="max-w-md p-2 h-auto text-xl lg:text-4xl font-medium"
          >
            <Link href={buttonUrl}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
