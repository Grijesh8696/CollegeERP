export default function Departments() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Departments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Computer Engineering</h3>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">
              Civil Engineering
            </h3>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">
              Electronics & Communication
            </h3>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Mechanical Engineering</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
