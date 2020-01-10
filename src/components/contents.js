
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import Router from 'next/router'
const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    height:620px;
    background-color:black;
.box1{
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height:620px;
    width: 570px;
    background-color:white;
}
.box2{
    display:flex;
    flex-direction: column; 
   justify-content: center;
   align-items: center;
    height:100%;
    width: 570px;
    background-color:white;
}
.box3{
    display:flex;
    flex-direction: column; 
   justify-content: center;
   align-items: center;
    height:100%;
    width: 570px;
    background-color:white;
}
h3 {
    padding: 20px 0 0 0;
    font-size: 30px;
}
h4 {
    padding: 5px 0 0 0px;
    text-align: left;
    font-weight: bold;
    font-size: 18px;
}
`

const Contents = () => {
    return (
        <StyledWrapper>
            <div className="box1" >
                    <Icon onClick={()=> Router.push('/purchasing001')} style={{ fontSize: '100px', color: '#08c' }} type="form" />
                <h3>เพิ่มคำสั่งซื้อพัสดุแบบปกติ  001</h3>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
            </div>
            <div className="box2" >
                <Icon onClick={()=> Router.push('/purchasing002')} style={{ fontSize: '100px', color: '#08c' }} type="snippets" />
                <h3>เพิ่มคำสั่งซื้อพัสดุแบบเร่งด่วน  002</h3>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
            </div>
            <div className="box3" >
                <Icon onClick={()=> Router.push('/profile')} style={{ fontSize: '100px', color: '#08c' }} type="user-add" />
                <h3>จัดการข้อมูลส่วนตัว</h3>
                    <h4>- แก้ไขข้อมูลประวัติส่วนตัว</h4>
            </div>
        </StyledWrapper>
    )
}
export default Contents;