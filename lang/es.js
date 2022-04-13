const legal = {
  termsAndConditions: "Términos y condiciones",
  privacyPolicy: "Política de Privacidad",
  noticeRiskDisclosure: "Aviso de Divulgación de Servicios",
  riskDisclosure: "Declaración de Riesgos",
  restrictedCountries: "Países Restringidos"
}

const register = {
  titlePage: "Abrir una cuenta", //Open an Account
  name: "Nombre",
  lastName: "Apellido",
  email: "Correo electrónico",
  countryOfResidence: "País de residencia",
  countryOfResidenceLabel: "Seleccione el país de residencia",
  phone: "Teléfono",
  phoneLabel: "Ingrese su número telefónico",
  phoneHint: "El número de teléfono debe tener entre 6 y 20 caracteres",
  password: "Contraseña",
  passwordHint: "La contraseña debe tener al menos 8 caracteres, debe contener al menos una mayúscula, una minúscula y un número. No se permiten espacios en blanco",
  bzTac: `Acepto los {termsAndConditions} y la {privacyPolicy}.`,
  saTac: `Entiendo y acepto los
                         {termsAndConditions}
                          y la
                          {privacyPolicy} de Scope Markets LTD.
                          Entiendo y acepto el
                          {noticeRiskDisclosure} y la
                         {privacyPolicySA} de Scope Markets SA (Pty) Ltd.`,
  marketing_agreement: "Al registrarse, acepta recibir avisos de marketing y publicidad.",
  submit: "Enviar",
  alreadyHaveAnAccount: "¿Ya tiene una cuenta?",
  logIn: "Iniciar sesión",
  prefix: "Test"
}

const resultDialog = {
  errorTitle: "ERROR",
  connectionFailedMessage: `La conexión ha fallado. Por favor, inténtelo de nuevo o póngase en contacto con nosotros en <a href="mailto:customerservice@scopemarkets.com">customerservice@scopemarkets.com</a>`,
  issueWithRegistration: "Ha habido un problema con su registro. Inténtelo de nuevo o póngase en contacto con nosotros.",
  close: "Cerrar",
}

const resetPassword = {
  titlePage: "Establecer nueva contraseña"
}

const agreement_acceptance = {
  importantNotice: "Aviso importante",
  firstParagraph: "En base a su selección, usted registrará una cuenta con Scope Markets Limited, que es una empresa extranjera registrada en Belice con número de registro 145,138.",
  secondParagraph: "Scope Markets Ltd está autorizada y regulada por la Comisión Internacional de Servicios Financieros de Belice (IFSC) bajo los números de licencia IFSC 000274/222 e IFSC 00274/221.",
  thirdParagraph: "Scope Markets Ltd actúa como proveedor de CFDs y de productos para sus operaciones, tal y como lo anuncia Scope Markets SA (PTY) Ltd que actúa como broker intermediario en nombre de Scope Markets Ltd. Scope Markets SA (Pty) Ltd (Número de registro 2016/137466/07) es una empresa de servicios financieros autorizada y regulada por la Autoridad de Conducta del Sector Financiero (FSCA) bajo el número de licencia FSP 47025.",
  fourthParagraph: "Todos los productos anunciados por Scope Markets SA (Pty) Ltd son proporcionados por Scope Markets Ltd como principal."
}

const signin = {
  titlePage: "Iniciar sesión",
  forgotPassword: "¿Olvidó su contraseña?",
  dontHaveAnAccount: "¿No tiene una cuenta?",
  registerHere: "Regístrese aquí",
  credentialsErrorMessage: "El nombre de usuario y la contraseña no coinciden."
}

const verify = {
  titlePage: "Verificar correo electrónico",
  successfulVerification: `¡Ha verificado correctamente su correo electrónico! Después de eso, podrá acceder a su cuenta de operaciones.
Para más información, puede ponerse en contacto con nosotros en <a href='mailto:customerservice@scopemarkets.com'>customerservice@scopemarkets.com</a> o haciendo clic <a onclick="window.fcWidget.open()">aquí</a> para hablar con uno de nuestros agentes.nueva contraseña para su cuenta. Después de eso, puede iniciar sesión en su cuenta de operacione`,
  linkInvalid: `El enlace de verificación del correo electrónico ya no es válido. Póngase en contacto con <a href='mailto:customerservice@scopemarkets.com'>customerservice@scopemarkets.com</a> o haga clic <a onclick="window.fcWidget.open()">aquí</a> para hablar con uno de nuestros agentes. Alternativamente, si ya ha verificado su cuenta, puede iniciar sesión <a onclick="window.location.replace('/es/signin')">aquí</a>.`,
  failVerification: `Se ha producido un error en el proceso de verificación. Inténtelo de nuevo o póngase en contacto con nuestro servicio de atención al cliente enviando un correo electrónico a <a href='mailto:customerservice@scopemarkets.com'>customerservice@scopemarkets.com</a> o haciendo clic <a onclick="window.fcWidget.open()">aquí</a> para hablar con uno de nuestros agentes. Si ya ha verificado su cuenta, puede iniciar sesión <a onclick="window.location.replace('/es/signin')">aquí</a>.`
}

const footer = {
  legalInformation: "Información legal",
  legalInformationText: "Scope Markets Ltd es una empresa registrada en Belice con el número de registro 145.138. Scope Markets Ltd está autorizada y regulada por la Comisión Internacional de Servicios Financieros de Belice ('IFSC') con los números de licencia 000274/222 y 000274/221. El domicilio registrado de Scope Markets Ltd es, 6160 Park Avenue, Buttonwood Bay, Lower Flat Office Space Front, Ciudad de Belice, Belice.",
  riskWarning: "Advertencia de riesgo",
  riskWarningText: `Tenga en cuenta que el comercio de divisas y de otros productos apalancados implica un nivel de riesgo significativo y no es adecuado para todos los inversores. Las operaciones con instrumentos financieros pueden dar lugar tanto a pérdidas como a beneficios y sus pérdidas pueden ser mayores que el capital invertido inicialmente. Antes de realizar este tipo de operaciones, debe asegurarse de que comprende plenamente los riesgos que conllevan y, si es necesario, solicitar asesoramiento independiente. Por favor, lea y asegúrese de comprender plenamente nuestra {riskDisclosure}.`,
  restrictedCountries: "Regiones restringidas",
  restrictedCountriesText: `Scope Markets no ofrece sus servicios a los residentes de ciertas jurisdicciones. Por favor, lea atentamente nuestro documento de {restrictedCountries}.`,
  cookiesPolicyText: `Este sitio web utiliza cookies para ofrecerle la mejor experiencia y conocerle mejor. Al visitar nuestro sitio web con su navegador configurado para permitir las cookies, usted acepta nuestro uso de las cookies tal y como se describe en nuestra {privacyPolicy}.`,
  copyrightDisclaimer: "© Copyright 2021 Scope Markets. Todos los derechos reservados."
}

const resetPasswordDialog = {
  close: "Cerrar",
  dialogTitle: "Restablecer contraseña",
  dialogSubtitle: "Puede restablecer su contraseña aquí.",
  resetPassword: "Restablecer contraseña", //button
  requestReceivedSuccess: "Su solicitud ha sido recibida. Siempre que esté registrada una cuenta con esta dirección de correo electrónico, recibirá en breve instrucciones sobre cómo restablecer su contraseña."
}

const homePage = {
  signUpTitle: "Regístrate ahora",
  signUpSubtitle: "Crea una cuenta ahora.",
  signUpButton: "Regístrese",
  signInTitle: "¡Bienvenido de nuevo!",
  signInSubtitle: "Para mantenerse conectado con nosotros, inicie sesión con su información personal.",
  signInButton: "Acceso",
}

const header = {
  language: "Idioma"
}

const validations = {
  messages: {
    "alpha": "El campo {_field_} solo debe contener letras",
    "alpha_dash": "El campo {_field_} solo debe contener letras, números y guiones",
    "alpha_num": "El campo {_field_} solo debe contener letras y números",
    "alpha_spaces": "El campo {_field_} solo debe contener letras y espacios",
    "between": "El campo {_field_} debe estar entre {min} y {max}",
    "confirmed": "El campo {_field_} no coincide",
    "digits": "El campo {_field_} debe ser numérico y contener exactamente {length} dígitos",
    "dimensions": "El campo {_field_} debe ser de {width} píxeles por {height} píxeles",
    "email": "El campo {_field_} debe ser un correo electrónico válido",
    "excluded": "El campo {_field_} debe ser un valor válido",
    "ext": "El campo {_field_} debe ser un archivo válido",
    "image": "El campo {_field_} debe ser una imagen",
    "oneOf": "El campo {_field_} debe ser un valor válido",
    "integer": "El campo {_field_} debe ser un entero",
    "length": "El largo del campo {_field_} debe ser {length}",
    "max": "El campo {_field_} no debe ser mayor a {length} caracteres",
    "max_value": "El campo {_field_} debe de ser {max} o menor",
    "mimes": "El campo {_field_} debe ser un tipo de archivo válido",
    "min": "El campo {_field_} debe tener al menos {length} caracteres",
    "min_value": "El campo {_field_} debe ser {min} o superior",
    "numeric": "El campo {_field_} debe contener solo caracteres numéricos",
    "regex": "{_field_} debe tener al menos 8 caracteres, debe contener al menos una mayúscula, una minúscula y un número. No se permiten espacios en blanco",
    "required": "El campo {_field_} es obligatorio",
    "required_if": "El campo {_field_} es obligatorio",
    "size": "El campo {_field_} debe ser menor a {size}KB",
    "double": "El campo {_field_} debe ser un decimal válido",
    "is": "El campo {_field_} no coincide con {other}",
    "is_not": "El campo {_field_} debe ser diferente a {other}",
    "included": "Este {_field_} está restringido"

  }
}
export default {
  legal,
  register,
  resultDialog,
  resetPassword,
  agreement_acceptance,
  signin,
  verify,
  footer,
  resetPasswordDialog,
  homePage,
  header,
  validations
}
