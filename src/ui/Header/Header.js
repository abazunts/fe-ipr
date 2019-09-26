import React, {Fragment} from 'react'
import injectSheet from 'react-jss';
import logo from '../../assets/img/saip-logo.png';
import NavbarContainer from "../Navbar/Navbar";
import UserInfoContainer from "../Login/UserInfo";
import s from './header.module.css'
import {translate} from "react-i18next";
import "./Header.css";
import Media from 'react-media';
import iconDown from "../../assets/img/icondown.png";
import editProfile from "../../assets/img/editprofile.png";
import signOut from "../../assets/img/signout.png";
import {compose} from "redux";
import {connect} from "react-redux";
import {authMe} from "../../redux/loginReducer";

let styles = {
    headerWrapper: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1.5fr 1.5fr',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    logoWrapper: {
        gridColumn: '1',
        gridRow: '1',
        marginLeft: '80px',
        maxWidth: '25vh',
        paddingTop: '5px',
    },

    logoImg: {
        width: '25vh',
    },

    menu: {
        gridColumn: '2',
        gridRow: '1',
        height: '100%'
    },

    login: {
        gridColumn: '3',
        gridRow: '1',
        textAlign: 'center',
        marginRight: '10px',
        maxHeight: '5%'
    },

    lng: {
        display: 'flex',
        alignItems: "center",
        flexWrap: 'nowrap'
    },

    logoWrapperRtl: {
        gridColumn: '3',
        gridRow: '1',
        marginLeft: '80px',
        maxWidth: '25vh',
        paddingTop: '5px',
    },

    loginRtl: {
        gridColumn: '1',
        gridRow: '1',
        textAlign: 'center',
        marginRight: '10px'
    },

    logoWrapperSmall: {
        gridColumn: '2',
        gridRow: '1',
        marginLeft: '80px',
        maxWidth: '25vh',
        paddingTop: '5px',
    },

    menuSmall: {
        gridColumn: '3',
        gridRow: '1',
        height: '100%',
    }


};


const Header = (props) => {
    const {classes, activeBtn, changeLanguage} = props;
    const {t, history, rtl, i18n} = props;
    const active = rtl ? "ar" : activeBtn;
    return <div className={classes.headerWrapper}>
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.large ?
                        <div className={i18n.language === 'en' ? classes.logoWrapper : classes.logoWrapperRtl}>
                            <img src={logo} className={classes.logoImg}/>
                        </div>
                        : <div className={classes.logoWrapperSmall}>
                            <img src={logo} className={classes.logoImg}/>
                        </div>}
                    <div className={matches.large ? classes.menu : classes.menuSmall}>
                        <NavbarContainer i18n={i18n}/>
                    </div>
                    <div className={classes.lng}>

                        <div className={classes.button}>
                            <div className={s.topMenu}>
                                <div>
                                    <button
                                        className={s.submenuLink}>{i18n.language === 'en' ? t("code.ar") : t("code.en")}
                                        <img src={iconDown}/></button>

                                    <div className={s.submenu}>
                                        <button onClick={() => changeLanguage("ar")}>{t("code.ar")}</button>
                                        <button onClick={() => changeLanguage("en")}>{t("code.en")}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <UserInfoContainer/>
                        </div>
                    </div>
                </Fragment>
            )}
        </Media>
    </div>
};


const HeaderContainer = (props) => {
    const [activeBtn, setActiveBtn] = React.useState('en');
    React.useEffect(() => {
        props.authMe()
    }, []);
    const changeLanguage = (lng) => {
        const {i18n, changeDirection} = props;

        setActiveBtn(lng);

        // if (lng === "ar") {
        //     changeDirection(true);
        // } else {
        //     changeDirection(false);
        // }
        i18n.changeLanguage(lng);
    };
    return <Header {...props} activeBtn={activeBtn} changeLanguage={changeLanguage}/>
};

export default compose(
    connect(null, {authMe}),
    translate("common"),
    injectSheet(styles)
)(HeaderContainer);