import styled from "styled-components";
import { Link } from "react-router-dom";

export const Caixa = styled.div`    display: flex;
background-color: #000;
/* margin: 0px; */
flex-wrap: nowrap;
flex-direction: column;
align-items: center;
`
//CAIXA 1 ============================================

export const Span1 = styled.span`
display: flex;
margin-top:60px ;
justify-content: center;
flex-direction:row;
aling-itens: center;
`

export const SpanMini1 = styled.span`
width: 500px;
margin: 90px 0px;
`

export const Img1 = styled.img`
padding-right: 90px;
height: 447px;
width: 627px;
`

export const H1 = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-bottom:45px;
font-size: 32px;
`

export const P = styled.p`
margin-bottom:45px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
`

export const SpanBtn = styled.span`
display:flex ;
align-items:center;
justify-content:right;
`

export const BntP = styled(Link)`
    height: auto;
    width:auto;
    font-size: 20px;
    background-color:#fff ;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 15px 25px;
    border-top-left-radius:20px ;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #000;
    &: hover{
       background-color: #AD6CFF;
       color: #fff;
    }
`


//CAIXA 2 ============================================
export const Span2 = styled.span`
display: flex;
margin-top:60px ;
flex-direction:row ;
padding:90px;
`
export const Caixinha1 = styled.span`
display: flex;
flex-direction:column ;
width: 349.72px;
height: 250px;
background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
border-radius: 10px;
align-items: left;`

export const Caixinha2 = styled.span`
display: flex;
flex-direction:column ;
margin: 0px 80px;
width: 349.72px;
height: 250px;
background: linear-gradient(0deg, #fff 0%, #ACACAC 100%);
border-radius: 10px;

`

export const P2 = styled.span`
color: #fff;
width: 250px;
margin-left:30px;
font-size: 24px;
`

export const P3 = styled.span`
color: #000;
margin-left:30px;
font-size: 24px;
`

export const Img2 = styled.img`
margin-left:30px;
margin-top:30px;
margin-bottom:30px ;
width: 50px;
`


export const Btn = styled.span`
color: #fff;
font-size: 24px;
`

export const Spanmini2 = styled.span`
 display: flex;
 margin-top:30px ;
 margin-right:25px ;
justify-content:right;
`

export const Btn2 = styled.span`
color: #000;
font-size: 24px;
`

export const SpanBtn2 = styled.span`
`


//CAIXA 3 ============================================
export const Span3 = styled.span`
display: flex;
margin-top:60px ;
flex-direction:row ;
justify-content:center;
/* margin-left:30px; */
width: 1236px;
height: 245.67px;
background: linear-gradient(150deg, #fff 0%, #ACACAC 100%);
border-radius: 10px;
align-items:center;

`

export const SpanMini4 = styled.span`
`

export const H2 = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: #000;
margin-bottom:20px;
font-size: 32px;
`

export const P4 = styled.p`
font-size: 20px;
width:603px;
color: #000;
`

export const Btn4 = styled(Link)`
font-size: 32px;
color: #fff;
display: flex;
align-items: center;
justify-content:center;
background-color: #000;
width: 200px;
margin-left: 60px ;
border-radius: 10px;
height: 63px;
text-decoration: none;
&: hover{
        color: #fff;
        background-color:#AD6CFF
    }
`
