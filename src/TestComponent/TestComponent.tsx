import React from 'react'
import { TestComponentProps } from "./TestComponent.types";
import "./TestComponent.scss";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 72px;
`;

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <Title>72px title bomb</Title>
  </div>
);

export default TestComponent;