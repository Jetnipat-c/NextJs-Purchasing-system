
import Headerstatus from '../src/components/Headerstatus'
import Topbar from '../src/components/Topbar'
import { Icon, Menu } from 'antd';
import 'antd/dist/antd.css'
import styled from 'styled-components'
import ContentsPC001 from '../src/components/ContentsPC001'
import React, { useState } from 'react';
const StyledWrapper = styled.div`
height:1000px;
//background-color:#EAECEE;

.textpadding{
    padding: 25px 50px 0 50px;
}
.menu{
    margin : 20px 50px 0 50px;
}
`
const purchasing001 = () =>{
    return (
        <StyledWrapper>
            <Topbar/>
            <Headerstatus/>
            <div className='textpadding'><h2>คำชี้แจง</h2><span> : กรุณากรอกข้อมูลให้ครบถ้วนก่อนการบันทึกข้อมูล</span></div>
            <div className="menu">
               <Menu theme="light" mode="horizontal">
                <Menu.Item >
                    <Icon type="form" />
                    แบบจัดหา 001
                    </Menu.Item>
                <Menu.Item >
                    <Icon type="snippets" />
                    แบบจัดหา 001-1 (หน้า 1)
                    </Menu.Item>
                <Menu.Item >
                    <Icon type="diff" />
                    แบบจัดหา 001-1 (หน้า 2)
                    </Menu.Item>
                <Menu.Item >
                    <Icon type="file-text" />
                    แบบจัดหา 001-3
                    </Menu.Item>
                <Menu.Item >
                    <Icon type="file-zip" />
                    ไฟล์ในโครงการ
                    </Menu.Item>
                <Menu.Item >
                    <Icon type="dollar" />
                    ใบเสนอราคา
                    </Menu.Item>
            </Menu> 
            </div>
            
            <ContentsPC001/>
        </StyledWrapper>
    )
}
export default purchasing001;