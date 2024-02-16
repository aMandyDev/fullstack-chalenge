import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
`

export const Container = styled.div`
  display: flex;
  margin: 3rem auto;
  text-align: center;
  width: 30rem;

 
  h1 {
    padding: 1rem;
  }
  img {
    width: auto;
    height: auto;
    min-width: 250px !important;
    min-height: 250px !important;
    padding: 1rem;
  }
`

export const Card = styled.div`
  background-color: #d3e1ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding:1rem;
  .logoutButton {
        position: fixed;
        top: 1.25rem;
        right: 1.25rem;
        background-color: blue;
        border: 1px solid #000000;
        color: white;
        font-weight: 600;
        border: none;
        box-shadow: none;
        font-size: 16px;
        padding: 1rem 2rem;
        border-radius: 6px;
        cursor: pointer;
}
    .logoutButton:hover {
        background-color: #000000;
        color: #ffffff;
    }
`

export const DataPersonal = styled.div``

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
 
  button {
    display: flex;
    width: 7rem;
    border-radius: 6px;
    background-color: green;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    margin: 1rem auto;
    padding: 0.7rem;
    border: none;
    box-shadow: none;
  }
  a {
  color: blue;
  }

  a:visited {
  color: purple;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
  color: #344054;
  display: block;
  margin: 0.5rem; 
`
export const Input = styled.input`
  width: 30rem;
  font-size: 1rem;
  font-weight: 400;
  color: #344054;
  background: #ffffff;
  border: 1px solid #000066;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 1rem;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #667085;
  }

  &:focus {
    border-color: #007bff;
  }
`

export const Address = styled.div``

export const ErrorMessage = styled.span`
  color: #db4437;
  font-size: 14px;
  font-weight: 400;
  margin-left: 12px;
  margin-top: 4px;
`