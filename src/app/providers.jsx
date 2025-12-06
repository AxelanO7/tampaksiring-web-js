'use client';

import { ToastProvider } from '@heroui/react';
import { Toaster } from 'sonner';

export default function Providers({ children }) {
  return (
    <ToastProvider>
      <Toaster richColors position="top-center" />
      {children}
    </ToastProvider>
  );
}

