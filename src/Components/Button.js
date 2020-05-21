import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size;1.4rem;
background: transparent;
border:0.05rem solid var(--lightOrange);
color:var(--lightOrange);
border-raadius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: var(--green);
    color:var (--green)
}
&:focus{
    outline:none;
}
`;

export const ButtonContainerInfo = styled.button`
text-transform:capitalize;
font-size;1.4rem;
background: transparent;
border:0.05rem solid var(--mainOrange);
border-color:${props => props.cart ? "var(--green)":"var(--mainOrange)"};
color:${props => props.cart ? "var(--green)": "var(--mainOrange)"};
border-raadius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart ? "var(--mainOrange)": "var(--green)"};
    color:var (--green)
}
&:focus{
    outline:none;
}
`;