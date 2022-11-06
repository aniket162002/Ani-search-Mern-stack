import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(to right,#305af2, #00b7e0)',
    width: '100%',
    height: '10%',
    fontSize: theme.typography.pxToRem(32),
    color: '#ccc',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.typography.pxToRem(40),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  copyRightCont: {
    textAlign: 'center',
    padding: '0.8rem',
    color: '#fff',
    background: 'linear-gradient(to right,#e615d4, #4a00e0)',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: theme.typography.pxToRem(22),
    margin: `${theme.typography.pxToRem(10)}`,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  line: {
    width: '100%',
    height: '0.1rem',
    background: '#fff',
  },
  '@media screen and (max-width: 600px)': {
    footer: {
      fontSize: theme.typography.pxToRem(22),
      display: 'flex',
      flexDirection: 'column',
    },
    linkContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.footer}>
        <div>
          <h1>Anime Club</h1>
          <p>One place to manage all your favourite animes.</p>
        </div>
        <a href="https://www.facebook.com" class="fa fa-facebook"></a>
        <a href="https://twitter.com" class="fa fa-twitter"></a>
        <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
        <a href="https://www.instagram.com" class="fa fa-instagram"></a>
        <a href="https://github.com" class="fa fa-github"></a>
        <div className={classes.linkContainer}>
          <Link
            to={{ pathname: '/auth', state: { login: true } }}
            className={classes.linkStyle}
          >
            Login
          </Link>
          <Link
            to={{ pathname: '/auth', state: { login: false } }}
            className={classes.linkStyle}
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.copyRightCont}>
        <p>Anime-Club Web &copy; 2022</p>
      </div>
    </div>
  );
};

export default Footer;



