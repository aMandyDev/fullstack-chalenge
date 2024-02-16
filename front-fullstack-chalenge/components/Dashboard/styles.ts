import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1rem;
    .typePoke { 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        .types-card {
                margin: 0.5rem;
                height: 2em;
                padding: 0.5rem;
                border-radius: 6px;
                font-weight: 600;
                width: 6rem;
                background-color: aquamarine;
            }
        }
    .containerButton{
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
        padding: 1rem 2rem;
        border-radius: 6px;
        cursor: pointer;
        margin: 1rem;
}
    .logoutButton:hover {
        background-color: #000000;
        color: #ffffff;
    }
`;

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
        margin-top: 1rem;
        text-align: center;
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
`;

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
  @media (min-width: 768px) {
    flex-direction: row;
  }

`;

export const FilterSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 0.5px #000006;
  border-radius: 6px;
  color: #747474;
  .option {
    font-weight: 600;
  }
`;

export const CardWrapper = styled.label`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 1400px;
    overflow-y: auto;   
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    @media (min-width: 768px) {
        max-height: 800px;
        justify-content: space-between;
        padding:1.5rem;
    }
`

export const Card = styled.label`
    display: grid;
    grid-template-rows: auto;    
    gap: 0.5rem;
    padding: 1rem;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Modal = styled.div`
    .modalContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18rem;
        height: auto;
        position: fixed;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #d3e1ea;
        padding: 1.25rem;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        .buttonName{
            display: flex;
            .inputName{
                padding: 0.5rem;
            }
        }        

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
        
        .all-info {
            background-color: #3399FF;
            display: flex;
            flex-direction: column;
            border-radius: 7px;
            padding: 0.5rem;
            width: 15rem;
            .title{
            color: white;
            font-size: 20px;
            font-weight: 600;
            }
            span,
            p {
              font-weight: 600;
              margin: 0.2rem;
            }
          
        }
        .types, 
        .abilities{
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
        
    }
`;