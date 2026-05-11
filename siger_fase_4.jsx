export default function SIGERPrototype() {
  const reports = [
    {
      id: 1,
      type: 'Residuos orgánicos',
      location: 'Sector central',
      status: 'Pendiente',
      priority: 'Alta'
    },
    {
      id: 2,
      type: 'Residuos reciclables',
      location: 'Parque principal',
      status: 'En proceso',
      priority: 'Media'
    },
    {
      id: 3,
      type: 'Residuos peligrosos',
      location: 'Zona residencial',
      status: 'Atendido',
      priority: 'Alta'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        <header className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                SIGER
              </h1>
              <p className="text-gray-600 mt-2">
                Sistema Inteligente de Gestión de Residuos
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-2 rounded-2xl bg-gray-800 text-white hover:opacity-90 transition">
                Iniciar Sesión
              </button>
              <button className="px-5 py-2 rounded-2xl border border-gray-400 hover:bg-gray-100 transition">
                Registrarse
              </button>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Reportes registrados
            </h2>
            <p className="text-4xl font-bold mt-4 text-gray-800">125</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Usuarios activos
            </h2>
            <p className="text-4xl font-bold mt-4 text-gray-800">48</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Puntos críticos
            </h2>
            <p className="text-4xl font-bold mt-4 text-gray-800">12</p>
          </div>
        <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Residuos reciclados
            </h2>
            <p className="text-4xl font-bold mt-4 text-gray-800">67%</p>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Dashboard ambiental
              </h2>
              <p className="text-gray-600 mt-1">
                Seguimiento general de la gestión de residuos.
              </p>
            </div>

            <input
              type="text"
              placeholder="Buscar reportes..."
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-800">Puntos críticos activos</h3>
              <p className="text-3xl font-bold mt-3">12</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-800">Reportes solucionados</h3>
              <p className="text-3xl font-bold mt-3">89</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-800">Usuarios registrados</h3>
              <p className="text-3xl font-bold mt-3">48</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registrar reporte
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de residuo
                </label>
                <select className="w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <option>Seleccione una opción</option>
                  <option>Orgánicos</option>
                  <option>Reciclables</option>
                  <option>Peligrosos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ubicación
                </label>
                <input
                  type="text"
                  placeholder="Ingrese la ubicación"
                  className="w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción
                </label>
                <textarea
                  rows="4"
                  placeholder="Describa la situación encontrada"
                  className="w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-2xl hover:opacity-90 transition"
              >
                Enviar reporte
              </button>
            </form>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Reportes recientes
            </h2>

            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="border border-gray-200 rounded-2xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      {report.type}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                      {report.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">
                    Ubicación: {report.location}
                  </p>

                  <p className="text-gray-600 mt-1">
                    Prioridad: {report.priority}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-2 rounded-xl bg-gray-800 text-white text-sm hover:opacity-90 transition">
                      Ver detalle
                    </button>

                    <button className="px-4 py-2 rounded-xl border border-gray-300 text-sm hover:bg-gray-100 transition">
                      Actualizar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Funcionalidades principales del sistema
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-2xl p-4">
              <h3 className="font-semibold text-gray-800">
                Gestión de usuarios
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Registro e inicio de sesión de usuarios.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-4">
              <h3 className="font-semibold text-gray-800">
                Registro de residuos
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Reporte de puntos críticos ambientales.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-4">
              <h3 className="font-semibold text-gray-800">
                Panel administrativo
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Gestión y control de información.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-4">
              <h3 className="font-semibold text-gray-800">
                Visualización de datos
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Consulta de reportes ambientales.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
