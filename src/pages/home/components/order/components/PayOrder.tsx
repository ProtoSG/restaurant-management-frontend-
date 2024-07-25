export default function PayOrder() {
  return (
    <section>
      <div className="flex justify-between py-8">
        <p className="text-text">Total</p>
        <span className="font-semibold">S/ 100.00</span>
      </div>
      <button className="w-full bg-primary py-4 font-semibold rounded-lg">Pagar</button>
    </section>
  )
}
