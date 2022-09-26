import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const StyledTemplate = styled.div`
  ${(props) => props.styleCss}
  .template-name {
    color: #191c39;
    font-size: 16px;
    font-weight: 600;
  }
  .template-main {
    margin: 30px 0;
  }
  .template-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 20px;
  }
  .template-copy {
    padding: 10px;
    border-radius: 4px;
    font-size: 13px;
    background-color: #b5b5b5;
    outline: none;
    border: none;
    color: white;
  }
`;

const Template = ({ html, styleCss, name }) => {
  return (
    <StyledTemplate css={styleCss} className="grid-item">
      <div className="template-header">
        <h2 className="template-name">{name}</h2>
      </div>
      <div className="template-main">{ReactHtmlParser(html)}</div>
      <div className="template-footer">
        <button className="template-copy">Copy HTML</button>
        <button className="template-copy">Copy CSS</button>
      </div>
    </StyledTemplate>
  );
};

export default Template;
