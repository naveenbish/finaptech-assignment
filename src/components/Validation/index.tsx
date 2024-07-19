import { memo } from "react";
const Validation = ({ validate, value, type }: validateType) => {
  if (type == "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validate && value.length == 0) {
      return (
        <div style={{ color: "red", fontSize: "13px" }}>
          Please fill this {type}
        </div>
      );
    } else if (!emailRegex.test(value) && validate) {
      return (
        <div style={{ color: "red", fontSize: "13px" }}>
          Please enter valid email...
        </div>
      );
    }
  }
  if (validate && value.length == 0) {
    return (
      <div style={{ color: "red", fontSize: "13px" }}>
        Please fill this {type}
      </div>
    );
  } else {
    null;
  }
};

interface validateType {
  validate: boolean;
  value: string;
  type: string;
}

export default memo(Validation);
