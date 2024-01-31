import React from 'react'
import logo from './img/logo.svg'
import {Button, Select, Language, A, Li, Ul, Container, Window} from  './header.styles'

export default function index() {
    return (
        <Window>
            <Container>
                <img src={logo} />
                <Ul>
                    <Li><A href="#">Vakansiyalar</A></Li>
                    <Li><A href="#">Kandidatlar</A></Li>
                    <Li><A href="#">Kompaniyalar</A></Li>
                    <Li><A href="#">Xizmatlar</A></Li>
                    <Li><A href="#">Ta'lim</A></Li>
                </Ul>
                <Language>
                    <Select>
                        <option value="O'zb">O'zb</option>
                        <option value="Rus">Rus</option>
                        <option value="Eng">Eng</option>
                    </Select>
                    <Button>Boshlash</Button>
                </Language>
            </Container>
        </Window>
    )
}
