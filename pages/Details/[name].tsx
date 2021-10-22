import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

export default function Details() {
  const [name, setName] = useState<string>('');
  const router = useRouter();
  useEffect(() => {
    setName(String(router.query?.name));
  }, []);
  return <div>{name}</div>;
}
