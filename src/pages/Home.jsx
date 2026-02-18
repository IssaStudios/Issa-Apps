import AppCard from '../components/AppCard'
import useFadeIn from '../hooks/useFadeIn'

const TIP_CALC_ICON = 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/46/df/4f/46df4f1a-0f45-4eb6-e70a-c25c61f25532/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg'

export default function Home() {
    const heroFade = useFadeIn()
    const sectionFade = useFadeIn()

    return (
        <>
            {/* Hero */}
            <section className="hero">
                <div className="container" ref={heroFade.ref}>
                    <div className={heroFade.className}>
                        <h1>Issa Apps</h1>
                        <div className="hero-badge">iOS App Developer</div>
                        <p>
                            Building thoughtful, well-crafted iOS apps.
                        </p>
                    </div>
                </div>
            </section>

            {/* Apps */}
            <section className="section" id="apps">
                <div className="container">
                    <div className={`section-header ${sectionFade.className}`} ref={sectionFade.ref}>
                        <p className="section-label">Apps</p>
                        <h2 className="section-title">Our Apps</h2>
                    </div>

                    {/* Car Share — Coming Soon (Featured) */}
                    <AppCard
                        name="Car Share"
                        subtitle="Share vehicles with your group"
                        description="Easily manage and coordinate vehicle sharing among friends, family, or coworkers. Track availability, schedule usage, and keep everyone in the loop."
                        iconClass="car-share"
                        iconEmoji="🚗"
                        badge="Coming Soon"
                        badgeClass="badge-coming-soon"
                        screenshots={['/Car Share Screenshots/image1.png', '/Car Share Screenshots/image2.png']}
                        comingSoon
                        featured
                        learnMoreTo="/apps/car-share"
                    />

                    {/* Tip Calculator */}
                    <AppCard
                        name="Tip Calculator - Fast & Easy"
                        subtitle="Split bills & calculate tips"
                        iconClass="tip-calc"
                        iconImage={TIP_CALC_ICON}
                        rating={5.0}
                        ratingCount={3}
                        category="Finance"
                        badge="Free"
                        badgeClass="badge-free"
                        screenshots={[
                            '/Tip Calculator Screenshots/image1.png',
                            '/Tip Calculator Screenshots/image2.png',
                            '/Tip Calculator Screenshots/image3.png',
                            '/Tip Calculator Screenshots/image4.png',
                            '/Tip Calculator Screenshots/image5.png',
                        ]}
                        storeUrl="https://apps.apple.com/us/app/tip-calculator-fast-easy/id6755919453"
                        learnMoreTo="/apps/tip-calculator"
                    />
                </div>
            </section>
        </>
    )
}
