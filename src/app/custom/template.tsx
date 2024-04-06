import React from 'react';
import { Toaster } from '@medusajs/ui';

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
        <Toaster />
      {children}
    </>
  );
}
