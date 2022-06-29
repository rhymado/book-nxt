import React from "react";
import { withRouter, useRouter } from "next/router";

import styles from "../../styles/Auth.module.css";

import Layout from "../../components/Layout";
// function Auth() {
//   const router = useRouter();
//   return <h1 className={`${styles.title} ${styles.big}`}>Auth</h1>;
// }

class Auth extends React.Component {
  state = {
    input: "",
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };
    localStorage.setItem("token", JSON.stringify(body));
    setTimeout(() => {
      this.props.router.push("/");
    }, 2000);
  };
  render() {
    // console.log(this.state.input);
    return (
      <Layout title="Login">
        <h1 className={`${styles.title} ${styles.big} text-center`}>Auth</h1>
        <form action="" className={styles.flex} onSubmit={this.onSubmitHandler}>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="pass" placeholder="pass" />
          <button type="submit">submit</button>
        </form>
      </Layout>
    );
  }
}

export default withRouter(Auth);
