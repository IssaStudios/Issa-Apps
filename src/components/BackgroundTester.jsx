import { useState } from 'react'

const BACKGROUNDS = [
    {
        name: '1. Clean Minimal',
        css: 'bg-none',
    },
    {
        name: '2. Subtle Noise',
        css: 'bg-noise',
    },
    {
        name: '3. Dot Grid',
        css: 'bg-dots',
    },
    {
        name: '4. Mesh Gradient',
        css: 'bg-mesh',
    },
    {
        name: '5. Gradient Streak',
        css: 'bg-streak',
    },
    {
        name: '6. Starfield',
        css: 'bg-stars',
    },
    {
        name: '7. Concentric Rings',
        css: 'bg-rings',
    },
    {
        name: '8. Northern Lights (Slow)',
        css: 'bg-aurora',
    },
    {
        name: '9. Frosted Vignette',
        css: 'bg-vignette',
    },
    {
        name: '10. Floating Orbs',
        css: 'bg-orbs',
    },
]

export default function BackgroundTester() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('bg-aurora')

    const applyBg = (css) => {
        setActive(css)
        // Remove all bg- classes from the glow element
        const el = document.querySelector('.bg-glow')
        if (el) {
            BACKGROUNDS.forEach((b) => el.classList.remove(b.css))
            if (css !== 'bg-none') {
                el.classList.add(css)
            }
            // Toggle visibility
            el.style.display = css === 'bg-none' ? 'none' : ''
        }
    }

    return (
        <div className="bg-tester">
            <button
                className="bg-tester-toggle"
                onClick={() => setOpen(!open)}
                title="Test Backgrounds"
            >
                🎨
            </button>

            {open && (
                <div className="bg-tester-panel">
                    <p className="bg-tester-title">Backgrounds</p>
                    {BACKGROUNDS.map((bg) => (
                        <button
                            key={bg.css}
                            className={`bg-tester-option ${active === bg.css ? 'active' : ''}`}
                            onClick={() => applyBg(bg.css)}
                        >
                            {bg.name}
                        </button>
                    ))}
                    <p className="bg-tester-hint">Pick one and let me know the number!</p>
                </div>
            )}
        </div>
    )
}
