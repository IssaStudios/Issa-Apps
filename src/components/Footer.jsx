export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-info">
                        <p className="footer-copyright">&copy; {year} Issa Apps. All rights reserved.</p>
                        <p className="footer-contact">
                            <a href="mailto:support@issa-apps.com">support@issa-apps.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
