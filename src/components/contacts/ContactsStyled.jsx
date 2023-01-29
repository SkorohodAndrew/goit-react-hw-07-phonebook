import styled from '@emotion/styled';

// export const ListContacts = styled.ul`
// margin: 0px;
// list-style: none;
// padding: 0px;
// `;

// export const ButtonDel = styled.button`
// min-width: 100px;
// margin-left: 16px;
// font-size: 20px;
// background-color: rgb(24, 140, 232);
// color: #ffffff;
// border: none;
// border-radius: 4px;

// &:hover,
// &:focus {
//     background-color: rgb(100, 50, 200);
// }
// `;

// export const ListItem = styled.li`
// margin-bottom: 8px;
// `

export const Info = styled.li`
  display: inline-block;
  margin-bottom: 10px;
  min-width: 200px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.span`
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  padding: 1px 7px 2px;
  text-align: start;
  font: 400 11px system-ui;
  cursor: pointer;
  border-radius: 5px;
  :hover,
  :focus {
    border-color: rgb(197, 167, 138);
    background-color: rgb(197, 167, 138);
  }
`;
