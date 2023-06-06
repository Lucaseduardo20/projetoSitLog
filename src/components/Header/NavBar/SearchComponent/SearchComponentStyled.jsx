import styled from "styled-components";

export const SearchComponentStyled = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #8d8c8c; 
    border-radius: 10px;

        a {
            font-size: 11px;    
            color: black;
            margin: 3px 0 0 3px;

            :hover{
                color: red;
            }
        }

        input{
            width: 80%;
            border: none;
            background-color: #8d8c8c;
            border-radius: 10px;
            padding: 0 0 0 2px;

            &:focus {
                outline: none;
            }

            &::placeholder,
            &::-webkit-input-placeholder {
              color: black;
              font-size: 10px;
              font-style: italic;
            }
        }
`