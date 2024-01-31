import styled from "styled-components";

const Container = styled.div`
  width: 778px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  padding: 32px 38px;
  background-color: white;
  margin-bottom: 146px;
  border-radius: 24px;
`;
const Header = styled.h3`
  color: #2a2941;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;
const Text = styled.p`
  color: #b3b3b3;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 130%;
`;
const Img = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 14px;
`;
const Sicl = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: burlywood;
`;
const Yuklash = styled.button`
  color: #5361e4;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Span = styled.span`
  color: #2a2941;
  font-size: 14px;
  display: inline-block;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 8px;
`;
const Name = styled.input`
  display: flex;
  width: 702px;
  height: 56px;
  padding: 18px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
`;
const Ul = styled.ul`
  display: flex;
  gap: 8px;
`;
const Li = styled.li`
  list-style: none;
  border: 1px solid #e3e3e3;
  padding: 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #8f99f1;
  }
`;
const Region = styled.label`
  display: flex;
  gap: 20px;
`;
const Davlat = styled.input`
  display: flex;
  width: 341px;
  height: 56px;
  padding: 18px;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
`;
const Description = styled.textarea`
  resize: none;
  height: 148px;
  display: flex;
  width: 702px;
  padding: 18px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
  color: #6e6d77;
  font-size: 14px;
  font-weight: 450;
`;
const Footer = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Before = styled.button`
  background-color: red;
  display: flex;
  width: 179.841px;
  height: 60px;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  color: white;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.5s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const Then = styled.button`
  background-color: #5361e4;
  display: flex;
  width: 179.841px;
  height: 60px;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  color: white;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.5s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export {Container, Header, Text, Img, Sicl, Yuklash, Span, Name, Ul, Li, Region, Davlat, Description, Footer, Before, Then}