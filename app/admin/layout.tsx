export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Admin Panel</h2>
      <nav>
        <a href="/admin/dashboard">Dashboard</a> |{" "}
        <a href="/admin/orders">Orders</a>
      </nav>
      <hr />
      {children}
    </section>
  );
}