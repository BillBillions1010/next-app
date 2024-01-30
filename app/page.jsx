import React from 'react';
import App from 'next';
import Head from 'next';
import Styles from 'next-material-kit';

export default class NextSite extends App {
    componentDIdiMount() {
        let comment= document.createComment(`
        
        =================================================
        *** BillBillions1010.github.io
        *** Next-Site-Creator v0.1.0 based on create-nex-app and NextJS Material Kit Free
        *** lisenced under MIT free use
        =================================================
        
            * Product Page:
            * Copyright:
            * Licensed Under MIT:
        
            * coded by BillBillions1010
        `);

        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
    render() {
        const{ Component, pageProps } = this.props;

        return(
            <React.Fragment>
                <Head>
                    <meta charset='UTF-8' />
                    <meta http-equiv='xmlns' ie='edge'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=yes' />
                    
                    <meta author='BillBillions1010' />
                    <title>'&brace;${this.pageProps.name}&rbrace;'</title>
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}