import styled from 'styled-components'
import Login from '../src/components/Login'
import Topbar from '../src/components/Topbar'
const StyledWrapper = styled.div`

`
const HomePage = prop => {
    return (
        <StyledWrapper>
            <Topbar></Topbar> 
            <Login>
            </Login>
        </StyledWrapper>
    )
}
export default HomePage;