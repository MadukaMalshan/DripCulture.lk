import Link from "next/link"
import { products } from "../data/product"

export default function ShopPage() {
  return (
    <main>
        <h1>Shop</h1>
        
        <ul>
          {products.map((product)=>(
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>

              <Link href={``}>
              View Products
              </Link>
            </li>
          ))}
        </ul>
    </main>
  )
}
