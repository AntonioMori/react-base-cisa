import { useEffect, useState } from "react"
import styled from "styled-components"
import { RxExit } from 'react-icons/rx'
import { MdManageSearch, MdOutlineFormatListBulleted } from 'react-icons/md'
import { SlChemistry } from "react-icons/sl";
import { Link } from "react-router-dom"
import { signOut, fetchUserAttributes } from "aws-amplify/auth"

import logowhite from '../../assets/logo-white.png'
import lab from '../../assets/lab2.jpg'
import CircularIndeterminate from "../CircularProgress"

const Main = styled.div`
background-image: url(${lab});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    width: auto;
    height: 100vh;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
`

const HeaderLinks = styled.a`
    :hover {
        opacity: 50%;
        transition-duration: 300ms;
    }
`

const BoxMenu = styled.div`
    background: linear-gradient(to right, #0c0376 0%, #4e4db8);
    float: left;
    height: 100vh;
    border-radius: 0 2em 2em 0;
`
const Title = styled.h1`
    color: white;
    padding: 1% 5% 0%;
    font-weight: bold;
    font-size: auto;
    line-height: 1;
`

const LogoWhite = styled.img`
    padding: 2% 5%;
    height: 15%;
`

const Text = styled.p`
    color: white;
    padding-left: 5%;
    /* padding-top: 0%;
    padding-bottom: 5%; */
`

const WhiteButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    background-color: white;
    border-radius: 3em;
    display: flex;
    width: 75%;

    
    :hover {
        background-color: #ffffff99;
        transition-duration: 300ms;
    }
`

const DivMenu = styled.div`
    padding-left: 5%;
`

const DivBotoes = styled.div`
    margin-bottom: 1em;
    margin-top: 1em;

`

const TextButton = styled.p`
    padding-left: 1em;
    font-weight: 600;
    text-decoration: none;
`

export default function Menu() {
    const [isLoading, setIsLoading] = useState(true)
    const [displayName, setDisplayName] = useState("")
    const [group, setGroup] = useState("")

    useEffect(() => {
        async function handleFetchUserAttributes() {
            try {
                const userAttributes = await fetchUserAttributes()
                if (userAttributes) {
                    const displayName = userAttributes['custom:display_name'];
                    const group = userAttributes['custom:group'];
                
                    if (displayName) {
                        setDisplayName(displayName);
                    }
                
                    if (group) {
                        setGroup(group);
                    }
                }
            } catch (error) {
                //console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        handleFetchUserAttributes()
    }, [])

    async function handleSignOut() {
        await signOut()
    }

    if (isLoading) {
        return <CircularIndeterminate />;
    }

    return (
        <Main>
            <BoxMenu>
                <Header>
                    <HeaderLinks onClick={handleSignOut}>
                        <RxExit size={30} color='white' />
                    </HeaderLinks>
                    <Text>Bem vindo(a), <strong>{displayName}</strong></Text>
                </Header>
                <LogoWhite src={logowhite} alt="Logo do ITEMM" />
                <Title>Plataforma de Solicitação de Análises</Title>
                <Text>Laboratório Físico-Químico</Text>
                    <DivMenu>
                            <DivBotoes>
                                <Link to="/novasolicitacao" style={{ textDecoration: 'none', color: 'black' }}>
                                    <WhiteButton>
                                        <SlChemistry size={30} />
                                        <TextButton>Nova Solicitação</TextButton>
                                    </WhiteButton>
                                </Link>  
                            </DivBotoes>
                            <DivBotoes>
                                <Link to="/minhassolicitacoes" style={{ textDecoration: 'none', color: 'black' }}>
                                    <WhiteButton>
                                        <MdOutlineFormatListBulleted size={25} />
                                        <TextButton>Acompanhamento</TextButton>
                                    </WhiteButton>
                                </Link>
                            </DivBotoes>
                            {group === "ADMINS" ? (
                                <DivBotoes>
                                    <Link to="/gerenciamento" style={{ textDecoration: 'none', color: 'black' }}>
                                        <WhiteButton>
                                            <MdManageSearch size={25} />
                                            <TextButton>Gerenciamento</TextButton>
                                        </WhiteButton>
                                    </Link>
                                </DivBotoes>
                            ) : null}
                    </DivMenu>
            </BoxMenu>
        </Main>
    )
}