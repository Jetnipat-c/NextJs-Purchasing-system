
import HeaderCP from '../src/components/HeaderCP'
import Topbar from '../src/components/Topbar'
import styled from 'styled-components'
import ContentsPC001 from '../src/components/ContentsPC001'
import React, { useState } from 'react';
const StyledWrapper = styled.div`

`
const purchasing001 = () =>{
    return (
        <StyledWrapper>
            <Topbar/>
            <HeaderCP/>
            <ContentsPC001/>
        </StyledWrapper>
    )
}
export default purchasing001;