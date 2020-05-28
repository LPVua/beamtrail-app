import { css } from 'emotion';

export const radio = css`
  display: flex;
  align-items: center;
`;

export const radioLabel = css`
  margin-left: 6px;
`;

export const toggle = css`
  display: flex;
  align-items: center;
  width: 42px;
  background: #bdc3c7;
  height: 22px;
  border-radius: 11px;
  position: relative;
  border: 1px solid transparent;
`;

export const toggleActive = css`
  border-color: #3498db;
`

export const toggleSwitch = css`
  width: 20px;
  height: 20px;
  background: #7f8c8d;
  border-radius: 10px;
  margin-left: 1px;
  transition: all .2s linear;
`;

export const toggleSwitchActive = css`
  background: #3498db;
  transform: translateX(100%);
`;
