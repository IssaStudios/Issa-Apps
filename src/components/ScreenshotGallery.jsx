import { useRef, useState, useEffect, useCallback } from 'react'

export default function ScreenshotGallery({ screenshots, large }) {
    const galleryRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const checkScroll = useCallback(() => {
        const el = galleryRef.current
        if (!el) return
        // Only show left arrow if meaningfully scrolled (more than 10px from start)
        setCanScrollLeft(el.scrollLeft > 10)
        // Only show right arrow if there's meaningful content off-screen
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
    }, [])

    useEffect(() => {
        const el = galleryRef.current
        if (!el) return

        // Reset scroll to absolute start
        el.scrollLeft = 0
        checkScroll()

        el.addEventListener('scroll', checkScroll, { passive: true })
        window.addEventListener('resize', checkScroll)

        // Re-check after images load (they change scrollWidth)
        const imgs = el.querySelectorAll('img')
        imgs.forEach((img) => img.addEventListener('load', checkScroll))

        const timer = setTimeout(checkScroll, 300)

        return () => {
            el.removeEventListener('scroll', checkScroll)
            window.removeEventListener('resize', checkScroll)
            imgs.forEach((img) => img.removeEventListener('load', checkScroll))
            clearTimeout(timer)
        }
    }, [checkScroll])

    const scroll = (dir) => {
        const el = galleryRef.current
        if (!el) return
        const amount = el.clientWidth * 0.7
        el.scrollBy({ left: dir * amount, behavior: 'smooth' })
    }

    return (
        <div className="gallery-wrapper">
            {canScrollLeft && (
                <button
                    className="gallery-arrow gallery-arrow-left"
                    onClick={() => scroll(-1)}
                    aria-label="Scroll left"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
            )}

            <div className="screenshot-gallery" ref={galleryRef}>
                {screenshots.map((src, i) => (
                    <div className={`screenshot-slot${large ? ' screenshot-slot-large' : ''}`} key={i}>
                        {src ? (
                            <img src={src} alt={`Screenshot ${i + 1}`} loading="lazy" />
                        ) : (
                            <div className="screenshot-placeholder">
                                <span className="icon">📷</span>
                                <span>Screenshot {i + 1}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {canScrollRight && (
                <button
                    className="gallery-arrow gallery-arrow-right"
                    onClick={() => scroll(1)}
                    aria-label="Scroll right"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
            )}
        </div>
    )
}
