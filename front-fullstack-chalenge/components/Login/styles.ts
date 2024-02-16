import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
`

export const Container = styled.div`
  margin: 6rem auto;
  width: 35rem;
  text-align: center;
  h1 {
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
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding:0.5rem ;
  width: 30rem;
 
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
  
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
  color: #344054;
  margin: auto;
  width: 30rem;
  display: flex;
 
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