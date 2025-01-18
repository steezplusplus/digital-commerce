import { FooterLogo } from '@/components/layout/footer/footer-logo';
import { FooterMenu } from '@/components/layout/footer/footer-menu';
import { ProjectInfo } from '@/components/layout/footer/project-info';
import { ThemeSelect } from '@/components/layout/footer/theme-select';
import { getCategories, getStore } from '@/lib/api';

export async function Footer() {
  const store = await getStore();
  const categories = await getCategories();

  return (
    <footer className="flex flex-col gap-6 border-t border-neutral-200 p-4 dark:border-neutral-800 md:flex-row md:gap-12">
      <FooterLogo storeName={store.name} />
      <FooterMenu categories={categories} />
      <ThemeSelect />
      <ProjectInfo />
    </footer>
  );
}
