import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

let theme = createMuiTheme({
	palette: {
   	primary: grey,
		background: {
			paper2: "rgb(245, 245, 245)",
			footer: "rgb(224, 224, 224)"
		}
	},
});

theme = responsiveFontSizes(theme);
theme.overrides = {
	...theme.overrides,
	MuiDrawer:{
		...theme.MuiDrawer,
	},
}

export default theme;