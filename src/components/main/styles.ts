import { css } from 'emotion';

export const main = css`
  display: flex;
  flex-direction: column;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: #ecf0f1;
  padding: 0 12px;
`;

export const content = css`
  padding: 18px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  column-gap: 12px;
  row-gap: 12px;
  box-sizing: border-box;
`;
