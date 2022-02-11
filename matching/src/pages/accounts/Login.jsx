import React, {useState, useEffect, createContext } from "react";
import { Form, Input, Button, notification, Card} from "antd";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {SmileOutlined, FrownOutlined} from "@ant-design/icons";
import useLocalStorage from "utils/useLocalStorage";
import {useAppContext} from "store";
import { setToken } from "store";


function Login(){
    const { dispatch } = useAppContext();
    const navigate = useNavigate();
    //const [jwtToken, setJwtToken] = useLocalStorage("jwtToken"," ")
    const [fieldsErrors, setFieldErrors] = useState({});


    const onFinish = values => {

        const {username , password } = values;

        setFieldErrors({});

        const data = {username, password };
          
        Axios.post("http://localhost:8000/accounts/token/", data)
        .then(response => {
                
            const { data : { token : jwtToken }} = response;

            dispatch(setToken(jwtToken));

            notification.open({
                message: "로그인 성공",
                icon: <SmileOutlined style={{ color: "#108ee9" }}/>
            })
    
            navigate("/");           
                
        })
        .catch(error => {
            console.log(error)
            notification.open({
                message: "로그인 실패",
                icon: <FrownOutlined style={{ color: "#ff3333" }}/>
            })
            if ( error.response ){
                const { data: fieldsErrorMessages } = error.response
                setFieldErrors(
                    Object.entries(fieldsErrorMessages).reduce((acc,[fieldName, errors]) => {
                        acc[fieldName] = {
                            validateStatus : "error",
                            help: errors.join(" "),
                        };  
                        return acc;
                    }, {} )
                );         
            }    
        })                    

    };


    return(
        <Card>
            <Form
            name="basic"

            labelCol={{ span: 8,}}
            wrapperCol={{span: 16,}}

            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            //autoComplete="off"
        >

        
            <Form.Item
            label="아이디"
            name="username"
            rules={[
                { required: true, message: 'Please input your id!',},
                { min : 5, max:20, message : "5글자 이상 입력해주세요. " }
            ]}
            hasFeedback
            {...fieldsErrors.username}
            {...fieldsErrors.non_field_errors}
            >
            <Input  />
            </Form.Item>
    
            <Form.Item
            label="비밀번호"
            name="password"
            rules={[
                { required: true, message:'Please input your password!',},
                { min : 8, max:20, message : "8글자 이상 입력해주세요. " }
            ]}
            hasFeedback
            {...fieldsErrors.password}
            >
            <Input.Password />
            </Form.Item>
    
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                로그인
            </Button>
            </Form.Item>
        </Form>
      </Card>
    );  
        
       
        
}

export default Login;