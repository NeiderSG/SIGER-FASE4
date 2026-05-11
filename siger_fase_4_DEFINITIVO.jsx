import { useEffect, useState } from 'react';

export default function SIGERPrototype() {
  const [reportList, setReportList] = useState(() => {
    const savedReports = localStorage.getItem('siger_reports');
    return savedReports ? JSON.parse(savedReports) : [];
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('siger_users');
    return savedUsers
      ? JSON.parse(savedUsers)
      : [{ username: 'admin', password: '1234', fullname: 'Administrador', email: 'admin@siger.com' }];
  });

  const [registerData, setRegisterData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: ''
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: ''
  });
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

  useEffect(() => {
    localStorage.setItem('siger_reports', JSON.stringify(reportList));
  }, [reportList]);

  useEffect(() => {
    localStorage.setItem('siger_users', JSON.stringify(users));
  }, [users]);

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!registerData.fullname || !registerData.email || !registerData.username || !registerData.password) {
      alert('Complete todos los campos de registro');
      return;
    }

    const userExists = users.find(
      (user) => user.username === registerData.username
    );

    if (userExists) {
      alert('El usuario ya existe');
      return;
    }

    setUsers([...users, registerData]);

    alert('Usuario registrado exitosamente');

    setRegisterData({
      fullname: '',
      email: '',
      username: '',
      password: ''
    });

    setShowRegister(false);
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = users.find(
      (user) =>
        user.username === loginData.username &&
        user.password === loginData.password
    );

    if (validUser) {
      setLoggedIn(true);
      alert(`Bienvenido ${validUser.fullname}`);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.type || !formData.location || !formData.description) {
      alert('Por favor complete todos los campos');
      return;
    }

    const newReport = {
      id: reportList.length + 1,
      type: formData.type,
      location: formData.location,
      description: formData.description,
      status: 'Pendiente',
      priority: 'Media'
    };

    setReportList([...reportList, newReport]);

    setFormData({
      type: '',
      location: '',
      description: ''
    });

    alert('Reporte registrado exitosamente');
  };

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
              {loggedIn ? (
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-medium">
                    Usuario conectado
                  </span>
                  <button
                    onClick={() => setLoggedIn(false)}
                    className="px-5 py-2 rounded-2xl border border-gray-400 hover:bg-gray-100 transition"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <form onSubmit={handleLogin} className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="rounded-xl border border-gray-300 px-3 py-2"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="rounded-xl border border-gray-300 px-3 py-2"
                  />

                  <button
                    type="submit"
                    className="px-5 py-2 rounded-2xl bg-gray-800 text-white hover:opacity-90 transition"
                  >
                    Iniciar Sesión
                  </button>
                </form>

                  <button
                    onClick={() => setShowRegister(!showRegister)}
                    className="text-sm text-gray-700 underline text-left"
                  >
                    {showRegister
                      ? 'Ocultar registro'
                      : '¿No tienes cuenta? Regístrate en SIGER'}
                  </button>

                  {showRegister && (
                    <form
                      onSubmit={handleRegister}
                      className="bg-gray-100 rounded-2xl p-4 space-y-3"
                    >
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Nombre completo"
                        value={registerData.fullname}
                        onChange={handleRegisterChange}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2"
                      />

                      <input
                        type="text"
                        name="username"
                        placeholder="Nombre de usuario"
                        value={registerData.username}
                        onChange={handleRegisterChange}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2"
                      />

                      <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2"
                      />

                      <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-xl hover:opacity-90 transition"
                      >
                        Registrarse
                      </button>
                    </form>
                  )}
                </div>
              )}
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
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de residuo
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
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
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
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
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
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
              {[...reports, ...reportList].map((report) => (
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
