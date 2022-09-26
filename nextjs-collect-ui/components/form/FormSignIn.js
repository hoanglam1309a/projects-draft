import { Template } from "components/common";

const FormSignIn = () => {
  return (
    <Template
      name="Form Sign In"
      html={`
        <form class="form">
          <h2 class="form-heading">Sign In</h2>
          <div class="form-group">
            <label for="email">Username</label>
            <input
              id="email"
              name="email"
              type="text"
              class="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              class="form-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" class="submit">
            Submit
          </button>
        </form>
      `}
      styleCss={`
      .form {
        max-width: 400px;
      }
      .form-heading {
        text-align: center;
        margin-bottom: 10px;
      }
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 10px;
      }
      .form-input {
        border-radius: 8px;
        padding: 14px;
        outline: none;
        border: none;
        background-color: #e7ecf3;
      }
      .submit {
        margin-top: 8px;
        width: 100%;
        padding: 14px;
        font-weight: 700;
        background: #316bff;
        border-radius: 8px;
        color: white;
        outline: none;
        border: none;
      }
    `}
    ></Template>
  );
};

export default FormSignIn;
