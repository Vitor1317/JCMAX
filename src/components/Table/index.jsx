import { TableContainer } from "./styles"

export function Table({contentHead, contentBody, renderBody}){
    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        {contentHead.map((item, i)=>(
                            <th key={i}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {contentBody.map((item, i)=> renderBody(item, i))}
                </tbody>
            </table>
        </TableContainer>
    )
}