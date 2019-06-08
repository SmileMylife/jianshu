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
`;

export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

//搜索框，box-sizing防止设置padding增大元素
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    cursor: pointer;
    &.reg {
        color: #ec6149;
    }
    &.write {
        color: #fff;
        background: #ec6149;
`;