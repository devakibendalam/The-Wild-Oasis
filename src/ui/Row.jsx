import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

// Default props can be set for components using destructuring syntax.
// Example: const Component = ({ prop = defaultValue }) => { ... };
// Default props ensure that if a prop is not provided, it falls back to a predefined default value.
// Setting Default Props in Styled Components:
Row.defaultProps = {
  type: "vertical",
};

export default Row;
