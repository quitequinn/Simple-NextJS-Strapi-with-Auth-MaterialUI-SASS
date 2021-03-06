import Footer from './Footer';
import React from "react";
import Head from "next/head";
import { unsetToken, checkAuth, getUserFromServerCookie, getUserFromLocalCookie } from "../lib/auth";
import Cookies from "js-cookie";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
         userId: false
      };
   }
   
   componentDidMount = () => {
      this.update();
   }
    
   update = () => {
      if (Cookies.get("id")) this.setState({userId: Cookies.get("id")})
   }
    
	render() {
		
		return (
			<ThemeProvider theme={theme}>
            { this.state.userId ? (	
               <>
                  {	// Logged In
                     <>
                        <main>
                           {this.props.children}
                        </main>
                     </>
                  }
               </>
            ) : (
               <>
                  {	// Not logged In
                     <>
                        {/* <SignUp/> */}
                        {/* <SignIn/> */}
                        <main className="no-auth">
                           {this.props.children}
                        </main>
                     </>
                 }
               </>
            )}
            <Footer />
			</ThemeProvider>
		);
	}
};

export default Layout;
