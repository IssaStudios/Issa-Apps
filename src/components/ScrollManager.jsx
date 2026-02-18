import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const SCROLL_KEY = 'issa-apps-scroll-'

export default function ScrollManager() {
    const { pathname } = useLocation()
    const navType = useNavigationType()
    const prevPath = useRef(pathname)

    useEffect(() => {
        const previous = prevPath.current
        prevPath.current = pathname

        // Navigating AWAY from a page: save scroll position
        if (previous !== pathname) {
            sessionStorage.setItem(SCROLL_KEY + previous, String(window.scrollY))
        }

        // Going BACK (e.g. "Back to Apps"): restore scroll with smooth animation
        if (navType === 'POP') {
            const saved = sessionStorage.getItem(SCROLL_KEY + pathname)
            if (saved) {
                // Brief delay so the page renders, then smooth scroll to where they were
                requestAnimationFrame(() => {
                    window.scrollTo({ top: parseInt(saved, 10), behavior: 'smooth' })
                })
                return
            }
        }

        // Going FORWARD (e.g. "Learn More"): instant scroll to top
        window.scrollTo(0, 0)
    }, [pathname, navType])

    return null
}
