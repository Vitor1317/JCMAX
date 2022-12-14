import styled from "styled-components";

export const TableContainer = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 1rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th{
            background-color: ${({theme})=> theme.th};
            padding: 1rem;
            text-align: center;
            color: inherit;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
                
            }
        }

        td {
            background-color: ${({theme})=> theme.td};
            border-top: 4px solid ${({theme})=> theme.bg};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;
            text-align: center;

            &:first-child {
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
                
            }
        }
    }
`;