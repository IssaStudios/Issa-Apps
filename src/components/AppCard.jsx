import { Link } from 'react-router-dom'
import useFadeIn from '../hooks/useFadeIn'
import ScreenshotGallery from './ScreenshotGallery'

export default function AppCard({
    name,
    subtitle,
    iconClass,
    iconEmoji,
    iconImage,
    rating,
    ratingCount,
    category,
    badge,
    badgeClass,
    screenshots,
    storeUrl,
    comingSoon,
    learnMoreTo,
    featured,
    description,
}) {
    const fadeIn = useFadeIn()

    return (
        <div className={`app-card ${featured ? 'app-card-featured' : ''} ${fadeIn.className}`} ref={fadeIn.ref}>
            {/* Header */}
            <div className="app-card-header">
                <div className={`app-icon ${iconClass || ''}`}>
                    {iconImage ? (
                        <img src={iconImage} alt={`${name} icon`} />
                    ) : (
                        <span className="app-icon-placeholder">{iconEmoji || '📱'}</span>
                    )}
                </div>

                <div className="app-info">
                    <h3 className="app-name">
                        {name}
                        {badge && <span className={`badge ${badgeClass || ''}`}>{badge}</span>}
                    </h3>
                    <p className="app-subtitle">{subtitle}</p>

                    <div className="app-meta">
                        {rating != null && (
                            <span className="app-meta-item">
                                <span className="stars">★★★★★</span>
                                <span className="rating-value">{rating}</span>
                                {ratingCount != null && <span>({ratingCount})</span>}
                            </span>
                        )}
                        {category && (
                            <span className="app-meta-item">{category}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Description for featured cards */}
            {description && (
                <p className="app-description">{description}</p>
            )}

            {/* Screenshots */}
            {screenshots && screenshots.length > 0 && (
                <ScreenshotGallery screenshots={screenshots} />
            )}

            {/* CTA */}
            <div className="app-cta">
                {storeUrl && !comingSoon && (
                    <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        View on App Store
                    </a>
                )}
                {comingSoon && (
                    <span className="btn btn-secondary" style={{ cursor: 'default' }}>
                        Coming Soon
                    </span>
                )}
                {learnMoreTo && (
                    <Link to={learnMoreTo} className="btn btn-secondary">
                        Learn More →
                    </Link>
                )}
            </div>
        </div>
    )
}
