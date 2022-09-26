import { Template } from "components/common";

const Switch = () => {
  return (
    <Template
      name="Simple toggle"
      html={`<div class="switch">
        <input type="checkbox" class="switch-input" id="switch-input" />
        <label for="switch-input" class="switch-label"></label>
      </div>`}
      styleCss={`
        .switch {
          --width: 80px;
          --height: 40px;
          --gap: 5px;
          --bg: #7d6aff;
        }
        .switch-label {
          position: relative;
          cursor: pointer;
          height: var(--height);
          width: var(--width);
          display: block;
          background-color: rgba(120, 120, 128, 0.16);
          border-radius: 100rem;
          transition: background-color 0.25s linear;
        }
        .switch-label::after {
          content: "";
          position: absolute;
          top: var(--gap);
          left: var(--gap);
          width: calc(var(--width) / 2 - var(--gap) * 2);
          height: calc(var(--height) - var(--gap) * 2);
          background-color: var(--bg);
          border-radius: 100rem;
          transition: all 0.25s linear;
        }
        .switch-input {
          display: none;
        }
        .switch-input:checked + .switch-label {
          background-color: var(--bg);
        }
        .switch-input:checked + .switch-label:after {
          transform: translateX(calc(100% + var(--gap) * 2));
          background-color: white;
        }
      `}
    ></Template>
  );
};

export default Switch;
