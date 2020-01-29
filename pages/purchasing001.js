
import Headerstatus from '../src/components/Headerstatus'
import Topbar from '../src/components/Topbar'
import { Icon, Menu ,Button } from 'antd';
import 'antd/dist/antd.css'
import styled from 'styled-components'
import ContentsPC001 from '../src/components/ContentsPC001'
import ContentsPC001_1 from '../src/components/ContentsPC001_1'
import React, { useState } from 'react';
const StyledWrapper = styled.div`
height:100%;
//background-color:#EAECEE;

.textpadding{
    padding: 25px 50px 0 50px;
}
.menu{
    margin : 20px 50px 0 50px;
}
.bt{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    margin: 20px;
    //background-color:red;
}
.btsubmit{
    //background-color:pink;
    padding-right:20px;
}
.btdowload{
    //background-color:green;
    padding-right:20px;
}
`
const purchasing001 = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('item1');
    const componentsSwtich = (key) => {
        switch (key) {
            case 'item1':
                return (<ContentsPC001/>
                    );
            case 'item2':
                return (<ContentsPC001_1/>);
            case 'item3':
                return (<h3>item3</h3>);
            default:
                break;
        }
    };

    return (
        <StyledWrapper>
            <Topbar />
            <Headerstatus />
            <div className='textpadding'><h2>คำชี้แจง</h2><span> : กรุณากรอกข้อมูลให้ครบถ้วนก่อนการบันทึกข้อมูล</span></div>
            <div className="menu">
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} onClick={(e) => setSelectedMenuItem(e.key)}>
                    <Menu.Item key='item1'>
                        <Icon type="form" />
                        แบบจัดหา 001
                    </Menu.Item>
                    <Menu.Item key='item2'>
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
            <div>
                {componentsSwtich(selectedMenuItem)}
            </div>
            <div className="bt">
                    <div className="btdowload">
                        <Button type="danger">Cancel</Button>
                    </div>
                    <div className="btsubmit">
                        <Button type="primary">Submit</Button>
                    </div>
                </div>
        </StyledWrapper>
    )
}
export default purchasing001;