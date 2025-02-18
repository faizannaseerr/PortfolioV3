"use client"

import React, { useState, useEffect } from 'react'

export default function Delay({ children }: { children: React.ReactNode }) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 2300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {showComponent && <DelayedComponent children={children} />}
    </div>
  );
};

const DelayedComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}


