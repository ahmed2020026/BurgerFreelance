import { Button, IconButton } from "@mui/material"
import { assets, LinksRoute } from "../assets/assets"
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutClick";
import { useNavigate } from "react-router-dom";
import { getLanguage } from "../hooks/Context";
import { LinksRoute_en } from "../assets/assets_en";

export const NavBar = () => {
    const { lang, setLang } = getLanguage();

    const NavLinks = lang === 'fi' ? LinksRoute : LinksRoute_en;
    const ChangeLanguage = (e) => {
        setLang(e);
    }

    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [OpenLanguage, setOpenLanguage] = useState(false)
    const MenuRef = useRef(null);
    const MenuLang = useRef(null);
    const nav = useNavigate();
    useOutsideClick(MenuRef, () => setOpenMenuMobile(false));
    useOutsideClick(MenuLang, () => setOpenLanguage(false));

    const GoTo = (e) => {
        window.scrollTo('0', '0')
        nav(`/${e}`);
    }
    return (
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={assets.logo_image} alt="logo" className="w-auto p-2 h-16 block shrink-0" />
                    {/* menu in large screen */}
                    <nav className="md:flex items-center hidden ">
                        {NavLinks.map((link, index) => (
                            <Button
                                onClick={() => GoTo(link.route)}
                                key={index}
                                sx={{
                                    position: "relative",
                                    color: "#fe9900",
                                    backgroundColor: "transparent",
                                    textTransform: "none",
                                    fontSize: '15px',

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: "50%",
                                        bottom: 6,
                                        width: "0%",
                                        height: "2px",
                                        backgroundColor: "#fe9900",
                                        transition: "all 0.3s ease",
                                        transform: "translateX(-50%)",
                                    },

                                    "&:hover::after": {
                                        width: "60%",
                                    },

                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {link.text}
                            </Button>
                        ))}
                    </nav>

                    {/* menu in small sreen */}
                    <nav ref={MenuRef} className={`border-b border-b-orange-500/50 absolute p-2 top-[calc(100%+5px)] right-0 w-full backdrop-blur-lg bg-black/80 rounded-md shadow-md transition-all duration-200 ease-out ${openMenuMobile
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'}
                                    `}>
                        {NavLinks.map((link, index) => (
                            <Button
                                onClick={() => GoTo(link.route)}
                                key={index}
                                sx={{
                                    position: "relative",
                                    textAlign: 'left',
                                    color: "#fe9900",
                                    display: 'block',
                                    width: '100%',
                                    backgroundColor: "transparent",
                                    textTransform: "none",
                                    fontSize: '15px',

                                    "&:hover": {
                                        backgroundColor: "#ed8f0e0d",
                                    },
                                }}
                            >
                                {link.text}
                            </Button>
                        ))}
                    </nav>
                </div>

                <div>
                    <span className="md:hidden">
                        <IconButton onClick={() => setOpenMenuMobile(!openMenuMobile)} aria-label="languageIcon" sx={{
                            position: "relative",
                            color: "#ed8f0e",
                            backgroundColor: "transparent",
                            textTransform: "none",
                            fontSize: '15px'
                        }}>
                            {!openMenuMobile ? <MenuIcon /> : <CloseIcon />}
                        </IconButton>
                    </span>

                    <IconButton onClick={() => setOpenLanguage(!OpenLanguage)} aria-label="languageIcon" sx={{
                        position: "relative",
                        color: "#ed8f0e",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        fontSize: '15px'
                    }}>
                        <LanguageIcon />
                    </IconButton>

                    <div ref={MenuLang} className={`absolute shadow-md transition-all duration-200 ease-out  w-28 top-[calc(100%+5px)] right-0 backdrop-blur-lg bg-transparent border border-[#fe9900]/20 rounded-lg ${OpenLanguage ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <ul>
                            <li className="w-full">
                                <Button onClick={() => ChangeLanguage('en')} sx={{
                                    width: '100%',
                                    display: 'block',
                                    position: "relative",
                                    color: "#fe9900",
                                    backgroundColor: "transparent",
                                    textTransform: "none",
                                    fontSize: '15px',
                                    borderRadius: '8px'
                                }} size="small">English</Button>
                            </li>
                            <li>
                                <Button onClick={() => ChangeLanguage('fi')} sx={{
                                    width: '100%',
                                    display: 'block',
                                    position: "relative",
                                    color: "#ed8f0e",
                                    backgroundColor: "transparent",
                                    textTransform: "none",
                                    fontSize: '15px',
                                    borderRadius: '0'
                                }} size="small">Finnish</Button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}