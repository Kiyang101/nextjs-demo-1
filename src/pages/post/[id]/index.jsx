import { useRouter } from "next/router";

const post = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>{id}</div>
    </>
  );
};

export default post;
