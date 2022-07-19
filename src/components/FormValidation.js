import "./style/FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [repassword, setRePassWord] = useState("");
  const [gender, setGender] = useState("");

  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const [errorGender, setErrorGender] = useState("");

  const [firstNameColor, setFirstNameColor] = useState("");
  const [lastNameColor, setLastNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [repasswordColor, setRePasswordColor] = useState("");
  const [genderColor, setGengerColor] = useState("");

  const [showData, setShowData] = useState(false);

  const validatform = (e) => {
    e.preventDefault();

    if (firstName.length >= 1) {
      setErrorFirstName("");
      setFirstNameColor("green");
    } else {
      setErrorFirstName("กรุณาระบุข้อมูล");
      setFirstNameColor("red");
    }
    if (lastName.length >= 1) {
      setErrorLastName("");
      setLastNameColor("green");
    } else {
      setErrorLastName("กรุณาระบุข้อมูล");
      setLastNameColor("red");
    }
    if (email.includes("@") && email.includes(".")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง");
      setEmailColor("red");
    }
    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("รหัสผ่านต้องมากกว่า 8 ตัวอักษร");
      setPasswordColor("red");
    }
    if (
      repassword !== "" &&
      repassword.length >= 8 &&
      repassword === password
    ) {
      setErrorRePassword("");
      setRePasswordColor("green");
    } else {
      setErrorRePassword("รหัสผ่านไม่ตรงกันหรือน้อยกว่า 8 ตัวอักษร");
      setRePasswordColor("red");
    }
    if (gender.length >= 3) {
      setErrorGender("");
      setGengerColor("green");
    } else {
      setErrorGender("กรุณาระบุเพศ (ชาย, หญิง, อื่นๆ)");
      setGengerColor("red");
    }
    if (firstName && lastName && email && gender) {
      setShowData(
        <div className="show">
          <div>Result:</div>
          <div>ชื่อ : {firstName}</div>
          <div>นามสกุล : {lastName}</div>
          <div>อีเมล : {email}</div>
          <div>เพศ : {gender}</div>
        </div>
      );
    } else {
      setShowData("");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validatform}>
        <h2>Test Form And Validation</h2>
        <div className="form-control">
          <label>ชื่อ</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ borderColor: firstNameColor }}
          />
          <small style={{ color: firstNameColor }}>{errorFirstName}</small>
        </div>
        <div className="form-control">
          <label>นามสกุล</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ borderColor: lastNameColor }}
          />
          <small style={{ color: lastNameColor }}>{errorLastName}</small>
        </div>
        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยีนยันรหัสผ่าน</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRePassWord(e.target.value)}
            style={{ borderColor: repasswordColor }}
          />
          <small style={{ color: repasswordColor }}>{errorRePassword}</small>
        </div>
        <div className="form-control">
          <label>เพศ</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{ borderColor: genderColor }}
          />
          <small style={{ color: genderColor }}>{errorGender}</small>
        </div>
        <button type="submit">Submit</button>
        {showData}
      </form>
    </div>
  );
};

export default FormComponent;
