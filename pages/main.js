import Topbar from '../src/components/Topbar'
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Contents from '../src/components/Contents'
const StyledWrapper = styled.div`
.footerbox{
    width:100%;
    height: 100vh;
}
`
const main = () => {
    return (
        <StyledWrapper>
            <Topbar />
            <Header />
            <Contents/>
            <div className='footerboox'>
            <Footer />
            </div>
        </StyledWrapper>
    )
}
export default main;