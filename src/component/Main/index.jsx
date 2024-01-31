import React from "react";
import {Container, Header, Text, Img, Sicl, Yuklash, Span, Name, Ul, Li, Region, Davlat, Description, Footer, Before, Then} from './index.styles'
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import global from "./img/global.svg";
import github from "./img/github.svg";
import facebook from "./img/facebook.svg";

export default function index() {
    return (
        <Container>
            <Header>Kompaniya ma'lumotlari</Header>
            <Text>Kompaniya haqidagi ma'lumotlarni kiriting</Text>
            <form>
                <Img>
                    <Sicl></Sicl>
                    <Yuklash>Yuklash</Yuklash>
                </Img>
                <>
                    <label>
                        <Span>Kompaniya nomi *</Span>
                        <Name type="text" placeholder="Kompaniya nomi" />
                    </label>
                    <label>
                        <Span>Email *</Span>
                        <Name type="text" placeholder="Email" />
                    </label>
                    <label>
                        <Span>Telefon raqami *</Span>
                        <Name type="number" placeholder="Namuna: 901234567" />
                    </label>
                    <label>
                        <Span>Linklar *</Span>
                        <Ul>
                            <Li><img src={global} /></Li>
                            <Li><img src={instagram} /></Li>
                            <Li><img src={telegram} /></Li>
                            <Li><img src={facebook} /></Li>
                            <Li><img src={github} /></Li>
                        </Ul>
                    </label>
                    <Region>
                        <label>
                            <Span>Davlat *</Span>
                            <Davlat type="text" placeholder="Kompaniya nomi" />
                        </label>
                        <label>
                            <Span>Shahar *</Span>
                            <Davlat type="text" placeholder="Kompaniya nomi" />
                        </label>
                    </Region>
                    <label>
                        <Span>Yashash joyi *</Span>
                        <Name type="text" placeholder="Joy" />
                    </label>
                    <label>
                        <Span>Hodimlar soni *</Span>
                        <Name type="number" placeholder="Hodimlar soni" />
                    </label>
                    <label>
                        <Span>Izoh *</Span>
                        <Description placeholder="Kompaniya haqida izoh qoldiring"></Description>
                    </label>
                </>
            </form>
            <Footer>
                <Before>Ortga</Before>
                <Then>Keyingisi</Then>
            </Footer>
        </Container>
    );
}
