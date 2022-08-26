import './css/index.css'
export default function ArrowUp() {
    return window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}