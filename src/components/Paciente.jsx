const Paciente = (props) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Oscar</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">oscar.pina@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 Dic 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">Diarrea, vomito, sueno</span>
      </p>
    </div>
  );
};

Paciente.propTypes = {};

export default Paciente;
