export const metadata = {
  title: "Política de privacidad",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <h1>Política de privacidad</h1>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>Responsable: [NOMBRE Y APELLIDOS DE LIVIU / DENOMINACIÓN SOCIAL]</li>
        <li>NIF: [NIF]</li>
        <li>Domicilio: [DIRECCIÓN COMPLETA]</li>
        <li>Email: [EMAIL DE CONTACTO PARA PROTECCIÓN DE DATOS]</li>
      </ul>

      <h2>2. Qué datos tratamos</h2>
      <p>
        Este sitio web es una página de presentación: no requiere registro ni
        recoge datos de salud. Los únicos datos personales que tratamos son
        los que nos facilitas voluntariamente a través del formulario de
        contacto: nombre, email, teléfono (opcional) y el mensaje que nos
        escribas.
      </p>

      <h2>3. Finalidad y base jurídica</h2>
      <p>
        Usamos estos datos únicamente para responder a tu consulta y valorar
        contigo el inicio del servicio de entrenamiento. La base jurídica es
        tu <b>consentimiento</b> (art. 6.1.a RGPD), que prestas al enviar el
        formulario.
      </p>

      <h2>4. Cuánto tiempo conservamos los datos</h2>
      <p>
        Conservamos los datos del formulario mientras dure la conversación
        comercial y, si finalmente contratas el servicio, pasan a tratarse
        conforme a la política de privacidad de la plataforma de coaching
        (app.livfit.es). Si no hay contratación, se eliminan en un plazo
        máximo de [PLAZO, p. ej. 12 meses] desde el último contacto.
      </p>

      <h2>5. A quién comunicamos tus datos</h2>
      <p>
        No vendemos ni cedemos tus datos a terceros. Solo acceden a ellos
        nuestros proveedores técnicos, con contrato de encargo de tratamiento
        (art. 28 RGPD):
      </p>
      <ul>
        <li>
          <b>[Proveedor de email transaccional, p. ej. Resend]</b>, para
          hacer llegar el mensaje del formulario a nuestro correo.
        </li>
        <li>
          <b>Vercel</b>, para el alojamiento del sitio web.
        </li>
      </ul>
      <p>No se utilizan herramientas de analítica de terceros ni píxeles publicitarios.</p>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, supresión, oposición, limitación y portabilidad
        escribiendo a [EMAIL]. Si consideras que el tratamiento no es
        adecuado, puedes reclamar ante la Agencia Española de Protección de
        Datos (www.aepd.es).
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Las comunicaciones con este sitio web viajan cifradas (HTTPS). El
        formulario de contacto se envía directamente a nuestro correo, sin
        quedar almacenado en ninguna base de datos pública.
      </p>
    </>
  );
}
