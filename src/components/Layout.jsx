import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ScrollManager from './ScrollManager'

export default function Layout() {
    return (
        <>
            <div className="bg-glow bg-aurora" aria-hidden="true" />
            <ScrollManager />
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
