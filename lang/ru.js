const legal = {
  termsAndConditions: "Условиями и Соглашениями",
  privacyPolicy: "Политикой Конфиденциальности",
  noticeRiskDisclosure: "Уведомление о Раскрытии Информации",
  riskDisclosure: "Уведомление о Рисках",
  restrictedCountries: "Запрещенные страны"
}

const register = {
  titlePage: "Открыть счет", //Open an Account
  name: "Имя",
  lastName: "Фамилия",
  email: "Эл. почта",
  countryOfResidence: "Страна проживания",
  countryOfResidenceLabel: "Выберите страну проживания",
  phone: "Номер телефона",
  phoneLabel: "Введите свой номер телефона",
  phoneHint: "Номер должен состоять из 6-20 символов",
  password: "Пароль",
  passwordHint: "Пароль должен состоять не менее чем из 8 символов, содержать как минимум один заглавный, один строчный символ и одну цифру. Пробелы не допускаются",
  bzTac: "Я согласен с {termsAndConditions} и {privacyPolicy}.",
  saTac: "Я понимаю и принимаю {termsAndConditions} и {privacyPolicy} Scope Markets LTD. Я понимаю и принимаю {noticeRiskDisclosure}, а также {privacyPolicySA}  Scope Markets SA (PTY) Ltd.",
  marketing_agreement: "Регистрируясь, Вы соглашаетесь получать маркетинговые и рекламные уведомления.",
  submit: "Создать счет",
  alreadyHaveAnAccount: "У Вас уже есть счет?",
  logIn: "Войти",
  prefix: "Test"
}

const resultDialog = {
  errorTitle: "ОШИБКА",
  connectionFailedMessage: `Connection failed! Please try again or contact us at <a href="mailto:customerservice@scopemarkets.com">customerservice@scopemarkets.com</a>`,
  issueWithRegistration: "Возникла ошибка при регистрации. Пожалуйста, попробуйте еще раз или свяжитесь с нами.",
  close: "Закрыть",
}

const resetPassword = {
  titlePage: "Введите новый пароль"
}

const agreement_acceptance = {
  importantNotice: "Важное Уведомление",
  firstParagraph: "На основании Вашего выбора вы зарегистрируете учетную запись в Scope Markets Limited, иностранной компании, зарегистрированной в Белизе с регистрационным номером 145,138.",
  secondParagraph: "Scope Markets Ltd авторизована и регулируется Комиссией по международным финансовым услугам Белиза (IFSC) под номерами лицензий IFSC 000274/222 и IFSC 00274/221.",
  thirdParagraph: "Scope Markets Ltd действует как поставщик CFD и поставщик продуктов для ваших сделок, рекламируемых Scope Markets SA (PTY) Ltd,  действующей как посредник от имени Scope Markets Ltd. Scope Markets SA (Pty) Ltd (Регистрационный номер 2016/137466/07) является авторизованной компанией финансовых услуг, уполномоченной и регулируемой Управлением по надзору за финансовым сектором (FSCA) под номером лицензии FSP 47025.",
  fourthParagraph: "Все продукты, рекламируемые Scope Markets SA (Pty) Ltd, предоставляются Scope Markets Ltd."
}

const signin = {
  titlePage: "Войти",
  forgotPassword: "Забыли пароль?",
  dontHaveAnAccount: "У Вас нет счета?",
  registerHere: "Зарегистрируйтесь сейчас",
  credentialsErrorMessage: "Логи и пароль не совпадают"
}

const verify = {
  titlePage: "Подтвердить эл. почту",

  successfulVerification: `«Адрес эл. почты подтвержден!
Для получения дополнительной информации вы можете связаться с нами по адресу  <a href='mailto:customerservice@scopemarkets.com' target='_blank'>customerservice@scopemarkets.com</a> или нажать <a onclick="window.fcWidget.open()">здесь</a> чтобы поговорить с одним из наших агентов. Новый пароль для вашей учетной записи. После этого вы можете войти в Ваш клиентский портал»`,


  linkInvalid: `Ссылка для подтверждения адреса эл. почты больше не действительна. Свяжитесь с <a href='mailto:customerservice@scopemarkets.com' target='_blank'>customerservice@scopemarkets.com</a> или нажмите <a onclick="window.fcWidget.open()">здесь</a>, чтобы поговорить с одним из наших агентов. Кроме того, если Вы уже подтвердили свою учетную запись, вы можете войти <a onclick="window.location.replace('/ru'/signin')">здесь</a>.`,

  failVerification: `При проверке произошла ошибка. Повторите попытку или свяжитесь с нашей службой поддержки, отправив эл. письмо на адрес <a href='mailto:customerservice@scopemarkets.com' target='_blank'>customerservice@scopemarkets.com</a> или нажмите <a onclick="window.fcWidget.open()">здесь</a>, чтобы поговорить с одним из наших агентов. Кроме того, если вы уже подтвердили свою учетную запись, вы можете войти <a onclick="window.location.replace('/ru'/signin')">здесь</a>.`
}

const footer = {
  legalInformation: "Легальная информация",
  legalInformationText: "Scope Markets Ltd is a company registered under Belize with Registration Number 145,138. Scope Markets Ltd is authorized and regulated by the International Financial Services Commission of Belize (“IFSC”) under the license numbers 000274/222 and 000274/221. The registered address of Scope Markets Ltd is, 6160, Park Avenue, Buttonwood Bay, Lower Flat Office Space Front, Belize City, Belize.",
  riskWarning: "Предупреждение о рисках",
  riskWarningText: `Обратите внимание, что торговля на продуктами Форекс и другими продуктами с кредитным плечом сопряжена со значительным уровнем риска и подходит не всем инвесторам. Торговля финансовыми инструментами может привести как к убыткам, так и к прибыли, и ваши убытки могут быть больше, чем ваш первоначальный инвестированный капитал. Прежде чем совершать какие-либо такие транзакции, вы должны убедиться, что полностью понимаете связанные с этим риски, и при необходимости обратиться за независимой консультацией. Пожалуйста, прочтите и убедитесь, что вы полностью понимаете наше {riskDisclosure}.`,
  restrictedCountries: "Запрещенные страны",
  restrictedCountriesText: `Scope Markets не предлагает свои услуги резидентам определенных юрисдикций. Пожалуйста, внимательно прочтите наш документ {restrictedCountries}.`,
  cookiesPolicyText: `Этот веб-сайт использует файлы cookie, чтобы предоставить вам лучший опыт и узнать вас лучше. Посещая наш веб-сайт через Ваш браузер, разрешающий использование файлов cookie, Вы соглашаетесь на использование файлов cookie, как описано в нашей {privacyPolicy}.`,
  copyrightDisclaimer: "© Copyright 2021 Scope Markets. Все права защищены."
}

const resetPasswordDialog = {
  close: "Закрыть",
  dialogTitle: "Сброс пароля",
  dialogSubtitle: "Вы можете сбросить свой пароль здесь.",
  resetPassword: "Сброс пароля", //button
  requestReceivedSuccess: "Ваш запрос был получен. При условии, что учетная запись с этим адресом эл. почты зарегистрирована, вы скоро получите инструкции по изменению пароля."
}

const homePage = {
  signUpTitle: "Зарегистрироваться",
  signUpSubtitle: "Создайте учетную запись сейчас.",
  signUpButton: "регистр",
  signInTitle: "Добро пожаловать назад!",
  signInSubtitle: "Чтобы оставаться на связи с нами, войдите в систему, указав свою личную информацию.",
  signInButton: "Войти",
}
const header = {
  language: "Язык"
}

const validations = {
  messages:  {
     "alpha": "Поле {_field_} может содержать только буквы",
    "alpha_dash": "Поле {_field_} может содержать только буквы, цифры и дефис",
    "alpha_num": "Поле {_field_} может содержать только буквы и цифры",
    "alpha_spaces": "Поле {_field_} может содержать только буквы и пробелы",
    "between": "Поле {_field_} должно быть между {min} и {max}",
    "confirmed": "Поле {_field_} не совпадает с {target}",
    "digits": "Поле {_field_} должно быть числовым и длиной {length}",
    "dimensions": "Поле {_field_} должно быть {width} пикселей на {height} пикселей",
    "email": "Поле {_field_} должно быть действительным электронным адресом",
    "excluded": "Поле {_field_} должно быть допустимым значением",
    "ext": "Поле {_field_} должно быть действительным файлом. ({args})",
    "image": "Поле {_field_} должно быть изображением",
    "oneOf": "Поле {_field_} должно быть допустимым значением",
    "integer": "Поле {_field_} должно быть целым числом",
    "length": "Длина поля {_field_} должна быть {length}",
    "max": "Поле {_field_} не может быть более {length} символов",
    "max_value": "Поле {_field_} должно быть {max} или менее",
    "mimes": "Поле {_field_} должно иметь допустимый тип файла. ({args})",
    "min": "Поле {_field_} должно быть не менее {length} символов",
    "min_value": "Поле {_field_} должно быть {min} или больше",
    "numeric": "Поле {_field_} должно быть числом",
    "regex": "{_field_}  должен состоять не менее чем из 8 символов, содержать как минимум один заглавный, один строчный символ и одну цифру. Пробелы не допускаются",
    "required": "Поле {_field_} обязательно для заполнения",
    "required_if": "Поле {_field_} обязательно для заполнения",
    "size": "Поле {_field_} должно быть меньше, чем {size}KB",
    "double": "Поле {_field_} должно быть допустимым десятичным числом",
    "included": "Эта {_field_} заблокирована "
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
