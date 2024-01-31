import styled from "styled-components";

const Window = styled.div`
    width: 100%;
    background-color: #5361e4;
`;

const Container = styled.div`
    max-width: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Ul = styled.ul`
    display: flex;
    gap: 48px;
    padding: 28px;
`;

const Li = styled.li`
    list-style: none;
`;

const A = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: all 0.5s;
&:hover{
    color: black;
}
`;

const Language = styled.div`
    display: flex;
    align-items: center;
    gap: 38px;
`;

const Select = styled.select`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 70px;
&:hover{
    color: black;
    }
`;

const Button = styled.button`
  height: 46px;
  padding: 8px 24px;
  border-radius: 12px;
  background: #fff;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #5361e4;
  cursor: pointer;
  transition: all 0.5s;
&:hover{
  background-color: #3848d0;
  color: #fff;
}
`;

export { Button, Select, Language, A, Li, Ul, Container, Window };