function Footer() {
  return (
    <>
      <footer className="footer">Footer</footer>
      <style jsx>
        {`
          .footer {
            height: min(50px, 10vh);
            background-color: goldenrod;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
