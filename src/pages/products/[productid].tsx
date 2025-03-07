import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { productid } = router.query;
  return (
    <p>Product Query: {productid}</p>
  );
}
