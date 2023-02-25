import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import { globalTheme } from '../theme/theme';
import { client } from '../client';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = React.useState<boolean>(true)
  // useEffect(() => {
  //   setLoading(true)
  //   const token = window?.localStorage.getItem("token")
  //   token ? router?.push('/dashboard') : router?.push('/')
  //   setLoading(false)
  // }, [])
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={globalTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}



export default MyApp
