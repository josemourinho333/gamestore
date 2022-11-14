import React from 'react';
import { useRouter } from 'next/router';

const Games = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>Games {pid}</div>
  )
}

export default Games