import { ThemeProvider as Provider } from 'next-themes';

type ThemeProvidersProps = {
  children: React.ReactNode;
};

export function ThemeProvider(props: ThemeProvidersProps) {
  const { children } = props;

  return (
    <Provider attribute="class" enableSystem={true}>
      {children}
    </Provider>
  );
}
