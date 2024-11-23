import { useRouter } from "next/router";
const comment = () => {
  const router = useRouter();
  const { id, commentId } = router.query;
  return (
    <>
      <div className="flex justify-center">
        id: {id}
        <br />
        commentId: {commentId}
      </div>
    </>
  );
};

export default comment;
