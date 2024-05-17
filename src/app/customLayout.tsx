import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const CustomLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            <Header />
            {children}
            <Footer/>
        </main>
    );
};

export default CustomLayout;