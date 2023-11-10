type MarqueeProps = {
  messages: string[];
};

export function Marquee(props: MarqueeProps) {
  const { messages } = props;
  return (
    <div className="mb-4 flex select-none gap-x-4 overflow-hidden whitespace-nowrap">
      <ul className="animate-marquee flex min-w-full shrink-0 justify-around gap-x-4">
        {messages.map((message, i) => {
          return <li key={`${message}-${i}`}>{message}</li>;
        })}
      </ul>

      <ul
        className="animate-marquee flex min-w-full shrink-0 justify-around gap-x-4"
        aria-hidden="true"
      >
        {messages.map((message, i) => {
          return <li key={`${message}-${i}-aria-hidden`}>{message}</li>;
        })}
      </ul>
    </div>
  );
}
