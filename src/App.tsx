import React, { lazy } from "react";

import theme from "@styles/theme";
import ThemeProvider from "@mui/system/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { ConfigProvider, theme as antTheme } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const BaseRoutes = lazy(() => import("./routes"));

const query = new QueryClient();

const App: React.FC = () => {
	return (
		<QueryClientProvider client={query}>
			<ThemeProvider theme={theme}>
				<ConfigProvider
					theme={{
						algorithm: antTheme.darkAlgorithm,
						token: {
							colorPrimary: theme.palette.primary.main,
							colorPrimaryText: theme.palette.primary.main,
							colorBgBase: theme.palette.background.default,
							colorBorder: theme.palette.background.paper,
							borderRadius: 4,
							fontFamily: theme.typography.fontFamily,
						},
					}}
				>
					<CssBaseline />
					<BaseRoutes />
				</ConfigProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
