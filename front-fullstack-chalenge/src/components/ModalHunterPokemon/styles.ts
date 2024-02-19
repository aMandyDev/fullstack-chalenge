import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    background-color: red;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    color: white;
    font-weight: 600;
    width: 7rem;
  }
`
export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  .capture {
    background-color: blue;
  }
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 18rem;
  height: 45rem;
`

export const ModalContent = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 0;
    width: 5px;
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
export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    margin: 0 1rem 0 0;
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
