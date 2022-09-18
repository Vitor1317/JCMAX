import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme})=> theme.gray6};
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    color: ${({theme})=> theme.gray1};

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: ${({theme})=> theme.gray8};
    width: 30rem;
    border-radius: 8px;

    div{
        &.top{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1.5rem;

            img{
                width: 5rem;
                height: auto;
            }
        }

        &.login{
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            
            input {
                width: 17rem;
                height: 3rem;
                border-radius: 8px;
                border: 0;
                outline: 0;
                color: ${({theme})=> theme.gray1};
                background-color:${({theme})=> theme.gray7};
                padding: 1rem;
                opacity: 0.7;

                &::placeholder{
                    color: ${({theme})=> theme.gray1};
                }
            }

            button {
                height: 3rem;
                border-radius: 90px;
                background: linear-gradient(to right, ${({theme})=> theme.yellow2}, ${({theme})=> theme.yellow7});
                cursor: pointer;
            }
        }

        &.footer{
            margin: 4rem 0 1.5rem;
        }
    }
`;

export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    img{ 
        width: 18rem;
        margin: -5rem 0;
    }

    p {
        font-weight: bold;
        font-size: 1.5rem;
    }

    h1 {
        font-size: 3rem;
    }
`;