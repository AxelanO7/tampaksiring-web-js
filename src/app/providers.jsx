'use client';

import { NextUIProvider } from '@heroui/react';
import { Toaster } from 'sonner';

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <Toaster richColors position="top-center" />
      {children}
    </NextUIProvider>
  );
}
