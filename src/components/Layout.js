import Head from "next/head";

import Footer from "components/Footer";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>home | auth | book</nav>
      {children}
      <Footer />
      <style jsx>
        {`
          nav {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

export default Layout;
