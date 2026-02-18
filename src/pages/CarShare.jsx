import { useNavigate } from 'react-router-dom'
import useFadeIn from '../hooks/useFadeIn'
import ScreenshotGallery from '../components/ScreenshotGallery'

export default function CarShare() {
    const navigate = useNavigate()
    const heroFade = useFadeIn()
    const featuresFade = useFadeIn()

    return (
        <div className="app-detail">
            {/* Hero */}
            <section className="app-detail-hero">
                <div className="container" ref={heroFade.ref}>
                    <div className={heroFade.className}>
                        <button onClick={() => navigate(-1)} className="back-link">← Back to Apps</button>

                        <div className="app-detail-header">
                            <div className="app-icon car-share app-icon-large">
                                <span className="app-icon-placeholder" style={{ fontSize: '2.5rem' }}>🚗</span>
                            </div>
                            <div className="app-detail-info">
                                <h1>Car Share</h1>
                                <p className="app-detail-subtitle">Share vehicles with your group</p>
                                <div className="app-meta">
                                    <span className="badge badge-coming-soon">Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshot */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Preview</h2>
                    <ScreenshotGallery
                        large
                        screenshots={[
                            '/Car Share Screenshots/image1.png',
                            '/Car Share Screenshots/image2.png',
                        ]}
                    />
                </div>
            </section>

            {/* About */}
            <section className="section">
                <div className="container" ref={featuresFade.ref}>
                    <div className={featuresFade.className}>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>About</h2>
                        <div className="about-text">
                            <p>
                                Car Share makes it easy to manage and coordinate vehicle sharing among friends, family,
                                or coworkers. Track availability, schedule usage, and keep everyone in the loop.
                            </p>
                        </div>

                        <h2 className="section-title" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Stay Updated</h2>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            Want to know when Car Share launches? Reach out at{' '}
                            <a href="mailto:support@issa-apps.com">support@issa-apps.com</a> and
                            we'll let you know.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
