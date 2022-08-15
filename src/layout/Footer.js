import '../css/Footer.css'

export default function Footer({ text }) {
    return (
        <footer className="app-footer">
            <p>{text}</p>
        </footer>
    )
}