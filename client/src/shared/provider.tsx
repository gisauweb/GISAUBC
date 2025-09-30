"use client";

import getAuthConfig from "@/libs/config";
import history from "@/libs/history";
import { Sentry, sentryConfig } from "@/libs/sentry";
import theme from "@/libs/theme";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider, responsiveFontSizes } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  Sentry.init(sentryConfig);
  const responsiveTheme = responsiveFontSizes(theme);

  const onRedirectCallback = (appState: any) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  const config = getAuthConfig();

  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    onRedirectCallback,
    authorizationParams: {
      redirect_uri: window.location.origin,
      ...(config.audience ? { audience: config.audience } : null),
    },
  };
  return (
    <BrowserRouter>
      <Auth0Provider {...providerConfig}>
        <ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>
      </Auth0Provider>
    </BrowserRouter>
  );
}
