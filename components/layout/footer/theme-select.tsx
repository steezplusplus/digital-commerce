'use client';

import { Loader } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSelect() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return (
      <div>
        <div className="mb-1 h-5 w-1/2 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />
        <div className="rounded-md border px-8 py-3">
          <Loader className="animate-pulse" size="12" />
        </div>
      </div>
    );
  }

  return (
    <label>
      <div className="mb-1">Theme</div>
      <select
        className="rounded-md border border-neutral-200 bg-white p-2 text-xs dark:border-neutral-800 dark:bg-transparent"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </label>
  );
}
