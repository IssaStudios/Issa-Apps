import { useNavigate } from 'react-router-dom'
import useFadeIn from '../hooks/useFadeIn'
import ScreenshotGallery from '../components/ScreenshotGallery'

const TIP_CALC_ICON = 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/46/df/4f/46df4f1a-0f45-4eb6-e70a-c25c61f25532/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg'

export default function TipCalculator() {
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
                            <div className="app-icon tip-calc app-icon-large">
                                <img src={TIP_CALC_ICON} alt="Tip Calculator icon" />
                            </div>
                            <div className="app-detail-info">
                                <h1>Tip Calculator - Fast &amp; Easy</h1>
                                <p className="app-detail-subtitle">Split bills &amp; calculate tips</p>
                                <div className="app-meta">
                                    <span className="app-meta-item">
                                        <span className="stars">★★★★★</span>
                                        <span className="rating-value">5.0</span>
                                        <span>(3)</span>
                                    </span>
                                    <span className="app-meta-item">Finance</span>
                                    <span className="badge badge-free">Free</span>
                                </div>
                                <div className="app-cta" style={{ marginTop: '1.5rem' }}>
                                    <a
                                        href="https://apps.apple.com/us/app/tip-calculator-fast-easy/id6755919453"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                        View on App Store
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Screenshots</h2>
                    <ScreenshotGallery
                        large
                        screenshots={[
                            '/Tip Calculator Screenshots/image1.png',
                            '/Tip Calculator Screenshots/image2.png',
                            '/Tip Calculator Screenshots/image3.png',
                            '/Tip Calculator Screenshots/image4.png',
                            '/Tip Calculator Screenshots/image5.png',
                        ]}
                    />
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container" ref={featuresFade.ref}>
                    <div className={featuresFade.className}>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Features</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <span className="feature-icon">⚡</span>
                                <h3>Quick Tip Calculation</h3>
                                <p>Enter your bill and see suggested tips instantly</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">👥</span>
                                <h3>Bill Splitting</h3>
                                <p>Divide the total among friends easily</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">🔄</span>
                                <h3>Round Up Options</h3>
                                <p>Round totals to make splitting easy</p>
                            </div>
                            <div className="feature-card">
                                <span className="feature-icon">✨</span>
                                <h3>Clean Interface</h3>
                                <p>No clutter, just results</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info */}
            <section className="section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Compatibility</span>
                            <span className="info-value">iOS 16.0+, iPadOS 16.0+, macOS 13.0+</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Size</span>
                            <span className="info-value">4.2 MB</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Category</span>
                            <span className="info-value">Finance</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Age Rating</span>
                            <span className="info-value">4+</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
