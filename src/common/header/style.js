import styled from "styled-components";
import logoPic from "../../static/logo.png";

//头部样式
export const HeaderWrapper = styled.div`
    height: 56px;
    border: 1px solid #f0f0f0;
    position: relative;
`;

//logo部分样式
export const Logo = styled.a.attrs({
    href: "/"
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

//头部中间导航
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background: green;
`;

export const NavItem = styled.div`
    &.left {
        float: left;
    }
    &.right: {
        float: right;
    }
    &.active {
        color: #ea6f5a;
        float: right;
    }
`;