import React from "react";
import { AppstoreOutlined, SearchOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons';

const icons = [AppstoreOutlined, UserOutlined, WechatOutlined, SearchOutlined];

export class BannerLogo extends React.Component{
    constructor(){
        super();
        this.state = {
            current: 0
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({current: (this.state.current+1) % icons.length})
        }, 500)
    }

    render(){
        let Icon = icons[this.state ? this.state.current : 0]
        return <Icon/>
    }
}