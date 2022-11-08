import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <h1>STRONG</h1>
                <p>CHEAP SIMPLE</p>
                <button class="btn-checkout"><Link href="../checkOut">Buy Now</Link></button>
            </div>
        </header>
    )
}