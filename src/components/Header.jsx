// REACT
import React from "react";
import gulmoza from '../assets/img/gulnoza.svg'

import { useNavigate, Link } from "react-router-dom";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";

// FROM ASSETS
import logo from "../assets/img/logo1.png";

// REACT ICONS
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";


export default function Header() {
  const navigate = useNavigate();

  // profile menu component
  const profileMenuItems = [
    {
      label: "Вход",
      icon: UserCircleIcon,
      url: "",
    },
    {
      label: "Регистрация",
      icon: Cog6ToothIcon,
      url: "",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <header className="bg-white body-font text-[#054550]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-10">
            <a href="#">
              <img
                className="w-52 h-16 active:scale-95 transition-all"
                src={logo}
                alt="Logo"
                onClick={() => navigate("/")}
              />
            </a>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <div className="mr-5 flex justify-center items-center gap-1 text-[15px]">
              <AiOutlineSearch className="w-10 h-10 active:scale-90 transition-all" />
              <p className="sm:hidden md:inline-block">Искать</p>
            </div>
            <div className="mr-5 flex justify-center items-center gap-1 text-[15px]">
              <AiOutlinePlusCircle className="w-10 h-10 active:scale-90 transition-all" />
              <p className="sm:hidden md:inline-block">Опубликовать поездку</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src="" alt="" />
            </div>
          </nav>
          <div className="flex justify-center items-center gap-2 mr-10 cursor-pointer">
            <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              placement="bottom-end"
            >
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="candice wu"
                    className="border border-blue-500 p-0.5 w-16 h-16"
                    withBorder={true}
                    src={gulmoza}
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-7 w-7 transition-transform ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="p-1 flex md:flex-col justify-center items-center text-white bg-[#528B93]">
                {profileMenuItems.map(({ label, icon }, key) => {
                  const isLastItem = key === profileMenuItems.length - 1;
                  return (
                    <MenuItem
                      key={label}
                      onClick={closeMenu}
                      className={`flex items-center gap-2 rounded w-[200px] ${
                        isLastItem
                          ? "hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200"
                          : ""
                      }`}
                    >
                      {React.createElement(icon, {
                        className: `h-12 w-16 ${
                          isLastItem ? "text-black" : ""
                        }`,
                        strokeWidth: 2,
                      })}
                      <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={isLastItem ? "black" : "inherit"}
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
        </div>
      </header>
    </div>
  );
}
