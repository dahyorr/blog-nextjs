import MainNavigation from './main-navigation'

const Layout: React.FC = ({children}) => {
    return(
        <>
            <MainNavigation/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout