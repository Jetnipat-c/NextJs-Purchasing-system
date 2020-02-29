
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import Router from 'next/router'
const StyledWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin: 5em 0 5em 0;
    width:100%;
    //height:100%;
    justify-content: space-around;
    //background-color:black;
.box{
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    //height:620px;
    min-height: 1em;
    justify-content: space-between;
    background-color:white;
}
h3 {
    padding: 20px 0 0 0;
    font-size: 30px;
}
h4 {
    padding: 5px 0 0 0em;
    text-align: left;
    font-weight: bold;
    font-size: 100%;
}
`

const Contents = () => {
    return (
        <StyledWrapper>
            <div className="box" >
                    <Icon onClick={()=> Router.push('/purchasing001')} style={{ fontSize: '100px', color: '#08c' }} type="form" />
                <h3>เพิ่มคำสั่งซื้อพัสดุแบบปกติ  001</h3>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
            </div>
            <div className="box" >
                <Icon onClick={()=> Router.push('/purchasing002')} style={{ fontSize: '100px', color: '#08c' }} type="snippets" />
                <h3>เพิ่มคำสั่งซื้อพัสดุแบบเร่งด่วน  002</h3>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
            </div>
            <div className="box" >
                <Icon onClick={()=> Router.push('/profile')} style={{ fontSize: '100px', color: '#08c' }} type="user-add" />
                <h3>จัดการข้อมูลส่วนตัว</h3>
                    <h4>- แก้ไขข้อมูลประวัติส่วนตัว</h4>
            </div>
        </StyledWrapper>
    )
}
export default Contents;