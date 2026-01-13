import Link from "next/link"

export default function page() {
  return (
    <main>
      <h1>DripCulture</h1>
      <p>Street Clothing store</p>

      <Link href="/shop">
        <button>Shop Now</button>
      </Link>
    </main>
  )
}
