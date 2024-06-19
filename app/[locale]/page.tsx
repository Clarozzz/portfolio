'use client'

import { useTranslations } from 'next-intl';
import Navbar from '@/components/navbar';
import Links from '@/components/links';
import Info from '@/components/info';
import { useCallback, useState } from 'react';

export default function Home() {
  const [sharedState, setSharedState] = useState('');

  const handleStateChange = useCallback((id: string) => {
    setSharedState(id)
  }, [])

  const t = useTranslations('language');

  return (
    <>
      <Navbar />

      <div className="mx-auto min-h-screen max-w-screen-xl px-10 lg:px-24 py-0">

        <div className="lg:flex gap-4 justify-between">

          <Links sharedState={sharedState} />

          <Info onStateChange={handleStateChange} />

        </div>

      </div>
    </>
  );
}
