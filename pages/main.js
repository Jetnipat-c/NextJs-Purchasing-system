import Topbar from '../src/components/Topbar'
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Contents from '../src/components/Contents'
const StyledWrapper = styled.div`

`
const main = () => {
    return (
        <StyledWrapper>
            <Topbar />
            <Header />
            <Contents/>
            <Footer />
        </StyledWrapper>
    )
}
export default main;