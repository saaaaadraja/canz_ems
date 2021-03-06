import React, { useState, useEffect } from "react";
import awsconfig from "./aws-exports";
import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";
import Index from "./newApp/index";
import "./Login.css";
import Logo from "./img/logo.png";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";
import { getEmployee } from "./graphql/queries";
import AdminForm from "./newApp/components/Form/AdminForm";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

Amplify.configure(awsconfig);

export const id = [""];
export const roleArr = [""];
export const empSupervisor = [""];
export const name = [""];
export const emp_full_name = [""];
const initialFormState = {
  username: "",
  password: "",
  formType: "signIn",
};

const App = () => {
  const [er, setEr] = React.useState([]);
  const [loading1, setLoading1] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = useState(null);
  const [formState, setFormState] = useState(initialFormState);
  useEffect(() => {
    checkUser();
    window.setTimeout(() => {
      setLoading1(false);
    }, 2500);
    document.title = "Employee Managment System";
  }, []);
  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setUser(user);
      const info = await Auth.currentUserInfo();
      id.push(info.attributes.sub);
      const uId = info.attributes.sub;
      const data = await API.graphql(
        graphqlOperation(getEmployee, { id: uId })
      );
      roleArr.push(data.data.getEmployee.role);
      empSupervisor.push(data.data.getEmployee.supervisor);
      emp_full_name.push(data.data.getEmployee.full_name);
      name.push(data.data.getEmployee.employee_name);
      console.log(data.data.getEmployee.status);
      if (data.data.getEmployee.status === "left") {
        setEr({
          errMsg: "your account is disabled please contact to HR department",
        });
        window.setTimeout(() => {
          setEr({ errMsg: "" });
        }, 5000);
        setLoading(false);
      } else {
        if (
          data.data.getEmployee.company.toLowerCase() === "canz studios" ||
          data.data.getEmployee.role === "hr manager" ||
          data.data.getEmployee.role === "owner"
        ) {
          setFormState({ username: "", password: "", formType: "signedIn" });
        } else {
          setEr({ errMsg: "User not Exist" });
          window.setTimeout(() => {
            setEr({ errMsg: "" });
          }, 5000);
          setLoading(false);
        }
      }
    } catch (err) {
      setEr({ errMsg: err.message });
      window.setTimeout(() => {
        setEr({ errMsg: "" });
      }, 5000);
    }
  };
  const onChange = (e) => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const signIn = async (e) => {
    const { username, password } = formState;
    setLoading(true);
    if (
      username.toLowerCase() === "admin" &&
      password.toLowerCase() === "admin"
    ) {
      setFormState({ username: "", password: "", formType: "addnew" });
    } else {
      Auth.signIn(username, password)
        .then(async (res) => {
          const info = await Auth.currentUserInfo();
          id.push(info.attributes.sub);
          const data = await API.graphql(
            graphqlOperation(getEmployee, { id: info.attributes.sub })
          );
          roleArr.push(data.data.getEmployee.role);
          empSupervisor.push(data.data.getEmployee.supervisor);
          emp_full_name.push(data.data.getEmployee.full_name);
          name.push(data.data.getEmployee.employee_name);
          if (data.data.getEmployee.status === "left") {
            setEr({
              errMsg:
                "your account is disabled please contact to HR department",
            });
            window.setTimeout(() => {
              setEr({ errMsg: "" });
            }, 5000);
            setLoading(false);
          } else {
            if (
              data.data.getEmployee.company.toLowerCase() === "canz studios" ||
              data.data.getEmployee.role.toLowerCase() === "hr manager" ||
              data.data.getEmployee.role.toLowerCase() === "owner"
            ) {
              setFormState({
                username: "",
                password: "",
                formType: "signedIn",
              });
            } else {
              setEr({ errMsg: "User not Exist" });
              window.setTimeout(() => {
                setEr({ errMsg: "" });
              }, 5000);
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          setEr({ errMsg: err.message });
          window.setTimeout(() => {
            setEr({ errMsg: "" });
          }, 5000);
          setLoading(false);
        });
    }
  };

  const { formType } = formState;
  return (
    <div>
      {loading1 ? (
        <p style={{ margin: "20% 50%" }}>Loading.... </p>
      ) : (
        <>
          {formType === "signedIn" && (
            <div>
              <Index />
            </div>
          )}
          {formType === "signIn" && (
            <div>
              <div className="container">
                <div id="main-outer-div">
                  <div id="logo-div">
                    <img id="logo-img" src={Logo} alt="" />
                  </div>
                  <div id="title-div">
                    <h4 className="title">Sign In</h4>
                  </div>
                  <div id="outer-login-form-div">
                    <form onSubmit={signIn}>
                      <input
                        className="login-form-input"
                        name="username"
                        disabled={loading ? "true" : ""}
                        value={formState.username}
                        onChange={onChange}
                        placeholder="User ID"
                      />
                      <input
                        className="login-form-input"
                        name="password"
                        disabled={loading ? "true" : ""}
                        value={formState.password}
                        type="password"
                        onChange={onChange}
                        placeholder="password"
                      />
                      <input
                        className="login-form-input submitBtn"
                        type="submit"
                        value="Sign in"
                        id="submitBtn"
                        disabled={loading ? "true" : ""}
                        onClick={signIn}
                      />
                      <p className="alert">{er.errMsg}</p>
                      <div className="loading">
                        <ScaleLoader
                          css={override}
                          sizeUnit={"px"}
                          size={150}
                          color={"#123abc"}
                          loading={loading}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formType === "addnew" && <AdminForm />}
        </>
      )}
    </div>
  );
};

export default App;
