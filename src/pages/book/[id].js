import { useEffect } from "react";
import { useRouter } from "next/router";

import { getBookDetail } from "../../modules/books/getBook";

function BookDetail() {
  const router = useRouter();
  useEffect(() => {
    if (Object.keys(router.query).includes("id")) {
      const id = router.query.id;
      getBookDetail(id)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }
  }, [router.query]);
  return <div>BookDetail</div>;
}

export default BookDetail;
