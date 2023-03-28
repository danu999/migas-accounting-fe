import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Avatar, Typography, Button } from "antd";
import { LayoutFilled } from "@ant-design/icons";
import { BookFilled } from "@ant-design/icons";
import { SnippetsFilled } from "@ant-design/icons";
import { InteractionFilled } from "@ant-design/icons";
import { AccountBookFilled } from "@ant-design/icons";
import { ContactsFilled } from "@ant-design/icons";
import { GoldFilled } from "@ant-design/icons";
import { ProjectFilled } from "@ant-design/icons";
import { ShopFilled } from "@ant-design/icons";
import { CarFilled } from "@ant-design/icons";
import { SlackCircleFilled } from "@ant-design/icons";
import { CaretDownFilled } from "@ant-design/icons";
import { CaretUpFilled } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutFilled,
  },
  {
    name: "Jurnal",
    href: "/jurnal",
    icon: BookFilled,
  },
  {
    name: "Laporan",
    href: "/laporan",
    icon: SnippetsFilled,
  },
  {
    name: "Simpan Pinjam",
    href: "/simpanpinjam",
    icon: InteractionFilled,
  },
  {
    name: "Data Akun",
    href: "/dataakun",
    icon: AccountBookFilled,
  },
  {
    name: "Data Kontak",
    href: "/datakontak",
    icon: ContactsFilled,
  },
  {
    name: "Assets",
    href: "/assets",
    icon: GoldFilled,
  },
  {
    name: "Sub Bisnis",
    icon: ProjectFilled,
    href: "/subbisnis",
    subMenus: [
      {
        name: "Kantin",
        href: "/kantin",
        icon: ShopFilled,
      },
      {
        name: "RentCar",
        href: "/rentcar",
        icon: CarFilled,
      },
      {
        name: "Bimtek",
        href: "/bimtek",
        icon: SlackCircleFilled,
      },
    ],
  },
];

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();

  const handleSubMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className='sidebar__scroll-container'>
      <div className='sidebar__wrapper'>
        <aside className='sidebar'>
          <div className='sidebar__top'>
            <Image
              width={80}
              height={80}
              className='sidebar__logo'
              src='/logo.png'
              alt='logo'
            />
          </div>
          <h1 className='sidebar__logo-name'>Koperasi Primadaya Migas</h1>
          <ul className='sidebar__list'>
            {sidebarItems.map(({ name, href, icon: Icon, subMenus }) => {
              if (name === "Sub Bisnis") {
                return (
                  <li className='sidebar__item' key={name}>
                    <div
                      style={{ cursor: "pointer" }}
                      className={`sidebar__link ${
                        router.pathname === href ? "sidebar__link--active" : ""
                      }`}
                      onClick={handleSubMenuClick}
                    >
                      <span className='sidebar__icon'>
                        <Icon />
                      </span>
                      <span className='sidebar__name'>{name}</span>
                      <span className='arrow'>
                        {subMenuOpen ? <CaretUpFilled /> : <CaretDownFilled />}
                      </span>
                    </div>
                    {subMenuOpen && (
                      <ul className='sidebar__submenu'>
                        {subMenus.map(({ name, href, icon: Icon }) => (
                          <li key={name}>
                            <Link href={href}>
                              <div className='sidebar__submenu-link'>
                                <span className='sidebar__submenu-icon'>
                                  <Icon />
                                </span>
                                <span className='sidebar__submenu-name'>
                                  {name}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li className='sidebar__item' key={name}>
                  <Link
                    className={`sidebar__link ${
                      router.pathname === href ? "sidebar__link--active" : ""
                    }`}
                    href={href}
                  >
                    <span className='sidebar__icon'>
                      <Icon />
                    </span>
                    <span className='sidebar__name'>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Avatar
            style={{
              height: "4rem",
              width: "4rem",
              marginLeft: "1rem",
              marginTop: "3rem",
              position: "absolute",
            }}
            src={
              "http://pm1.narvii.com/6312/5f2d6e748051cbf40c6bd388077684c4c279e577_00.jpg"
            }
          />

          <Typography.Title
            style={{
              fontSize: "1.3rem",
              marginLeft: "6rem",
              marginTop: "4.2rem",
            }}
          >
            Danisha Mavis Saputri
          </Typography.Title>
          <Typography
            style={{
              fontSize: "15px",
              marginLeft: "6rem",
              marginRight: "5rem",
            }}
          >
            Bendahara
          </Typography>
          <Button
            type='primary'
            icon={<LogoutOutlined />}
            style={{
              height: "30px",
              width: "100px",
              fontSize: "13px",
              backgroundColor: "#ccaa44",
              marginLeft: "100px",
              marginTop: "10px",
            }}
          >
            Logout
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
