import { Template } from "components/common";

const Input = () => {
  return (
    <Template
      name="Input outline"
      html={`<input name="username" type="text" class="input" placeholder="Enter your username" />`}
      styleCss={`
        .input {
          width:100%;
          max-width: 350px;
          border-radius: 8px;
          padding: 14px;
          outline: none;
          border: 1px solid #316bff;
        }`}
    ></Template>
  );
};

export default Input;
