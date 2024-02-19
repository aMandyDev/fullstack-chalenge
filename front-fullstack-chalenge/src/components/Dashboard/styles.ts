import styled from 'styled-components'

export const TypePoke = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 14rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: blue;
  }
  .typePoke {
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .types-card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    height: 2em;
    border-radius: 6px;
    font-weight: 600;
    width: 6rem;
    background-color: aquamarine;
  }
`
export const Wrapper = styled.div`
  padding: 1rem;
  .containerButton {
    display: flex;
    justify-content: end;
  }

  .logoutButton {
    position: relative;
    justify-content: end;
    top: 1.25rem;
    right: 1.25rem;
    background-color: blue;
    border: 1px solid #000000;
    color: white;
    font-weight: 600;
    border: none;
    box-shadow: none;
    font-size: 16px;
    border-radius: 6px;
    padding: 1rem;
    width: 4rem;
    cursor: pointer;
  }
  .logoutButton:hover {
    background-color: #000000;
    color: #ffffff;
  }
`

export const Container = styled.div`
  width: auto;
  height: auto;
  margin: 1rem;
  .messageNoPoke {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      display: flex;
      padding-top: 10rem;
      padding-bottom: 5rem;
      margin: auto;
      font-weight: 600;
    }
    img {
      display: flex;
      margin: auto;
    }
  }

  h1 {
    margin-top: 2rem;
    text-align: center;
    font-size: 35px;
  }

  button {
    display: flex;
    width: 16rem;
    border-radius: 6px;
    background-color: green;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    border: none;
    box-shadow: none;
    font-size: 16px;
    margin: 1rem auto;
    padding: 0.7rem;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  p {
    font-weight: 600;
    font-size: 16px;
    margin: 0.5rem;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: end;
  }
`

export const FilterSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 0.5px blue;
  border-radius: 6px;
  color: #3f3e3e;
  cursor: pointer;
  .option {
    font-weight: 600;
  }
`

export const CardWrapper = styled.label`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  gap: 1.5rem;
  max-height: 1400px;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
    max-height: 755px;
  }
`

export const Card = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 250px;
  height: 350px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 18rem;
  height: 40rem;
  @media (min-width: 700px) {
    height: 50rem;
  }
`

export const ModalContent = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 0;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: green;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: blue;
  }
  transform: translate(-50%, -50%);
  background-color: #d3e1ea;
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

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
  .close {
    background-color: red;
  }

  .types,
  .abilities {
    flex-direction: column;
    display: flex;
    word-wrap: break-word;
    justify-content: space-between;
    flex-wrap: wrap;
    .items {
      border-radius: 6px;
      padding: 0.2rem;
      background-color: #ffe8af;
    }
  }
`

export const AllInfo = styled.div`
  background-color: #3399ff;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 0.5rem;
  width: 15rem;
  .title {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  span,
  p {
    font-weight: 600;
    margin: 0.2rem;
  }
`

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    margin: 0 1rem 0 0;
  }
`

export const ButtonName = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  justify-content: space-between;
  .inputName {
    border-radius: solid 6px #000066;
    padding: 0.5rem;
    width: 11rem;
    height: 2rem;
  }
  span {
    border-radius: 10%;
    background: green;
    padding: 0.5rem 0.5rem;
    color: white;
    margin-left: 0.5rem;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0.5rem;
  }
`

export const Captured = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    padding-top: 0.2rem;
  }
`
