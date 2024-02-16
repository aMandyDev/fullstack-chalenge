import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1rem;
`;

export const Container = styled.div`
    width: auto;
    height: auto;
    margin: 1rem;
    @media (min-width: 768px) {
        
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