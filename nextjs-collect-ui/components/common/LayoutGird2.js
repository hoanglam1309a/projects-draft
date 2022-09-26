import styled from "styled-components";

const StyledLayoutGrid2 = styled.div`
  .grid-layout {
    display: grid;
    grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr);
    grid-gap: 30px;
  }
  .grid-column {
    display: flex;
    flex-direction: column;
  }
  .grid-item {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
  }
`;

const LayoutGird2 = ({ children }) => {
  return <StyledLayoutGrid2>{children}</StyledLayoutGrid2>;
};

export default LayoutGird2;
