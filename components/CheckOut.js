import { checkout } from '../CheckoutForm'
import Image from 'next/image'

export default function CheckOut() {
    return (
        <main>
            <h1 className="title">
                Buy my steel keys
            </h1>

            <div id="checkout">
                <button>Pay now!</button>
            </div>

            <div className="grid">
                <div>
                    <Image src="/images/product1.webp" alt="NanaX" width={400} height={400} />
                    <p>NANO X</p>
                    <button onClick={(() => {
                        checkout({
                            lineItems: [
                                {
                                    quantity: 1,
                                    price: "price_1LevnDKbatRxHBBGMY8PHxvB"
                                }
                            ]
                        })
                    })}>BUY!</button>
                </div>
                <div>
                    <Image src="/images/product2.webp" alt="NanaSPlus" width={400} height={400} />
                    <p>NANO S PLUS</p>
                    <button onClick={(() => {
                        checkout({
                            lineItems: [
                                {
                                    quantity: 1,
                                    price: "price_1Levp1KbatRxHBBGb7Ckralh"
                                }
                            ]
                        })
                    })}>BUY!</button>
                </div>
            </div>
        </main>
    )
}