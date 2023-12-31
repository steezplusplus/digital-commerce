import { Categories } from '@/components/layout/search/categories';
import { Filter } from '@/components/layout/search/filter';
import { Container } from '@/components/ui/container';
import { sorting } from '@/lib/constants';

type SearchLayoutProps = {
  children: React.ReactNode;
};

export default function SearchLayout(props: SearchLayoutProps) {
  const { children } = props;

  return (
    <Container className="flex flex-col gap-8 px-4 pb-4 md:flex-row">
      <div className="order-first w-full flex-none md:max-w-[9rem]">
        <Categories title="Categories" />
      </div>
      <div className="order-last w-full md:order-none">{children}</div>
      <div className="order-none flex-none md:order-last md:w-[9rem]">
        <Filter list={sorting} title="Sort by" />
      </div>
    </Container>
  );
}
