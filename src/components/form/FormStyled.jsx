import styled from '@emotion/styled';

export const FormBox = styled.div`
  padding: 16px;
  width: 360px;
  display: flex;
  flex-direction: column;

  border: 1px solid #6f4e37;
  border-radius: 10px;
`;

export const ButtonAdd = styled.button`
  margin-top: 16px;
  min-width: 200px;
  height: 40px;
  font-size: 20px;
  color: #ffffff;
  border: none;

  border-radius: 8px;
  border-color: rgb(197, 167, 138);
  background-color: rgb(197, 167, 138);
  color: rgb(255, 255, 255);
  :hover,
  :focus {
    background-color: rgb(83 161 48);
    border-color: background-color: rgb(83 161 48);
  }
`;

export const LabelBox = styled.label`
  font-size: 24px;
`;

export const InputBox = styled.input`
  margin-left: 10px;
  font-size: 16px;
  outline: transparent;
  border-radius: 4px;

  &:focus,
  &:hover {
    border-color: rgb(33, 150, 243);
  }
`;

// export const Forml = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   padding: 15px;
//   margin: 0 auto;
//   max-width: 600px;
//   border: 1px solid #6f4e37;
//   border-radius: 10px;
// `;

// export const Label = styled.label`
//   font-weight: 700;
//   margin-right: 10 px;
// `;

// export const Input = styled.input`
//   border: 1px solid #6f4e37;
//   border-radius: 4px;
//   margin-left: 20px;
// `;

// export const Button = styled.button`
//   width: 130px;
//   padding: 2px 8px;
//   border-radius: 8px;
//   border-color: rgb(197, 167, 138);
//   background-color: rgb(197, 167, 138);
//   color: rgb(255, 255, 255);
//   :hover,
//   :focus {
//     background-color: rgb(83 161 48);
//     border-color: background-color: rgb(83 161 48);
//   }
// `;
