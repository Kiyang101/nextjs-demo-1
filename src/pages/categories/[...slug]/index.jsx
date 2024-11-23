import { useRouter } from "next/router";
const categories = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="text-center text-[8vh]">{JSON.stringify(slug)}</div>
    </>
  );
};

export default categories;
