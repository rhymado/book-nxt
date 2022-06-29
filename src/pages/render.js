import axios from "axios";
function Render({ msg, err }) {
  return (
    <>
      {err ? (
        <>
          <div>{msg}</div>
          <div>{err}</div>
        </>
      ) : (
        <div>{msg}</div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(process.env.URL.concat("ping"));
    const msg = response.data.msg;
    return {
      props: {
        msg,
        err: null,
      },
    };
  } catch (err) {
    return {
      props: {
        msg: "Terjadi Error",
        err: err.message,
      },
    };
  }
}

export default Render;
