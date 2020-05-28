import { css } from 'emotion';

export const card = css`
  border: 1px solid #ecf0f1;
  display: flex;
  flex-direction: column;
  padding: 6px;
`;

export const title = css`
  display: flex;
  font-weight: bold;
  height: 36px;
  align-items: center;
  flex-shrink: 0;
`

export const value = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

export const connectButton = css`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  border: none;
  background: #3498db;
  transition: background .2s linear;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  &:hover {
    background: #2980b9;
  }
`