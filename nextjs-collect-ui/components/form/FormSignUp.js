import { Template } from "components/common";

const FormSignUp = () => {
  return (
    <Template
      name="Form Sign Up"
      html={`
        <form class="form">
          <h2 class="form-heading">Sign Up</h2>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              class="form-input"
              placeholder="Enter your username"
            />
            <span class="form-error">Please enter your username</span>
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
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              id="email"
              name="email"
              type="text"
              class="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label for="job">Are you</label>
            <select name="job" id="job" class="form-select">
              <option value="student">Student</option>
              <option value="worker">Worker</option>
            </select>
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
      .form-input,
      .form-select {
        border-radius: 8px;
        padding: 14px;
        outline: none;
        border: 1px solid #316bff;
      }
      .form-error {
        color: #e74c3c;
        font-size: 14px;
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

export default FormSignUp;
