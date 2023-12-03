import styled from "styled-components";
import { NAV_WIDTH } from "../common/Layout";
import Logo from "../../images/nav/lnb_logo.svg";
import { Link } from "react-router-dom";
import navIcons from "./navIcons";
import { useState } from "react";

const navItems = {
  top: [
    {
      value: "ALL",
      image: navIcons.AllIcon,
      activeImage: navIcons.AllIconOn,
    },
    {
      value: "Search",
      image: navIcons.Search,
      activeImage: navIcons.SearchOn,
    },
    {
      value: "Folder",
      image: navIcons.Folder,
      activeImage: navIcons.FolderOn,
    },
  ],
  bottom: [
    {
      value: "MENU_01",
      image: navIcons.Menu01,
      activeImage: navIcons.Menu01On,
    },
    {
      value: "MENU_02",
      image: navIcons.Menu02,
      activeImage: navIcons.Menu02On,
    },
    {
      value: "MENU_03",
      image: navIcons.Menu03,
      activeImage: navIcons.Menu03On,
    },
    {
      value: "MENU_04",
      image: navIcons.Menu04,
      activeImage: navIcons.Menu04On,
    },
    {
      value: "MENU_05",
      image: navIcons.Menu05,
      activeImage: navIcons.Menu05On,
    },
    {
      value: "MENU_06",
      image: navIcons.Menu06,
      activeImage: navIcons.Menu06On,
    },
    {
      value: "MENU_07",
      image: navIcons.Menu07,
      activeImage: navIcons.Menu07On,
    },
    {
      value: "MENU_08",
      image: navIcons.Menu08,
      activeImage: navIcons.Menu08On,
    },
    {
      value: "MENU_09",
      image: navIcons.Menu09,
      activeImage: navIcons.Menu09On,
    },
  ],
};

const Nav = () => {
  const [selectItem, setSelectItem] = useState(null);

  const handleSelectItem = (value) => {
    if (value === selectItem) {
      setSelectItem(null);
    } else {
      setSelectItem(value);
    }
  };

  return (
    <Container width={NAV_WIDTH}>
      <h1>
        <Link to="/main">
          <img src={Logo} alt="logo"></img>
          <span>kcc logo</span>
        </Link>
      </h1>

      <ul className="nav nav-top">
        {navItems.top.map((item) => {
          return (
            <li className="nav-item" key={`nav_${item.value}`}>
              <button
                className="nav-item-button"
                type="button"
                onClick={() => handleSelectItem(item.value)}
              >
                <img
                  src={
                    item.value === selectItem ? item.activeImage : item.image
                  }
                  alt={item.value}
                />
              </button>
            </li>
          );
        })}
      </ul>

      <ul className="nav nav-bottom">
        {navItems.bottom.map((item) => {
          return (
            <li className="nav-item" key={`nav_${item.value}`}>
              <button
                className="nav-item-button"
                type="button"
                onClick={() => handleSelectItem(item.value)}
              >
                <img
                  src={
                    item.value === selectItem ? item.activeImage : item.image
                  }
                  alt={item.value}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  position: fixed;
  width: ${({ width }) => width};
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #001242;
  h1 {
    width: 100%;
    height: 4.5rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #1a4298;
      span {
        text-indent: -9999px;
      }
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    gap: 16px;

    &-top {
      background-color: rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

export default Nav;
