import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from "./style";

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">Aa</NavItem>
                        <NavSearch></NavSearch>
                        <Addition>
                            <Button className="reg">注册</Button>
                            <Button className="write">登录</Button>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
            </div>
        )
    }
}

export default Header;