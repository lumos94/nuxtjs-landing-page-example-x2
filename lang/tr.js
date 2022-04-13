const legal = {
  termsAndConditions: "Sartlar ve Kosullar",
  privacyPolicy: "Gizlililik Politikasini",
  noticeRiskDisclosure: "Nin Hizmet Bildirimini",
  riskDisclosure: "Risk Uyarisi",
  restrictedCountries: "Yasak Ülkeler"
}

const register = {
  titlePage: "Hesap Ac", //Open an Account
  name: "Ad",
  lastName: "Soyad",
  email: "Eposta",
  countryOfResidence: "Ikamet Adresi",
  countryOfResidenceLabel: "Ikamet Adresi Seciniz",
  phone: "Telefon",
  phoneLabel: "Telefon numaranızı girin",
  phoneHint: "Telefon Numarasi 6-20 karakter arasi olmali",
  password: "Sifre",
  passwordHint: "Sifreniz en az 8 karakter olmali, en az bir buyuk bir kucuk harf ve bir rakam icermeli. Bosluk icermemeli",
  bzTac: "{termsAndConditions} ve {privacyPolicy} onayliyorum.",
  saTac: ` Scope Markets LTD Ni tum
                          {termsAndConditions}
                          ve
                          {privacyPolicy} anliyor ve kabul ediyorum
                          Scope Markets SA (Pty) Ltd.
                          {noticeRiskDisclosure} ve
                          {privacyPolicy} anliyor ve kabul ediyorum.`,
  marketing_agreement: "Kayit olusturarak reklam ve kampanya bilgisi almayi kabul etmis oluyorsunuz.",
  submit: "Onayla",
  alreadyHaveAnAccount: "Hesabiniz Var mi?",
  logIn: "Giris Yapin",
  prefix: "Test"
}

const resultDialog = {
  errorTitle: "HATA",
  connectionFailedMessage: "Bağlantı Başarısız! Daha sonra tekrar deneyin veya customerservice@scopemarkets.com adresinden benimle iletişime geçin.",
  issueWithRegistration: "Hesap Acilisinizla ilgili bir problem var! Daha sonra tekrar deneyin ya da bizimle ieltisime gecin.",
  close: "Kapat",
}

const resetPassword = {
  titlePage: "Sifre Olustur"
}

const agreement_acceptance = {
  importantNotice: "Onemli Uyari",
  firstParagraph: "Seciminize gore Regulasyon Numarasi 145,138  Belizede kayitli olan Scope Markets Limited`de bir hesap acacaksiniz.",
  secondParagraph: "Scope Markets Ltd IFSC 000274/222 ve IFSC 00274/221 lisans numaralari altinda  International Financial Services Commission of Belize (IFSC) tarafindan yetkilendirilir ve duzenlenir.",
  thirdParagraph: "Scope Markets SA (PTY) Scope Markets Ltd  adina araci olarak hizmet veren  CFD  ve  islemlerinizdeki urunlerin saglayicisidir. (Regulasyon  Numarasi 2016/137466/07) Financial Sector Conduct Authority tarafindan denetlenen yetkili bir finansal hizmet sirketidir.  (FSCA) Lisans Numarasi FSP 47025.",
  fourthParagraph: " Scope Markets SA (Pty) Ltd tarafindan reklami yapilan tum urunler Scope Markets Ltd tarafindan saglanmaktadir."
}

const signin = {
  titlePage: "Giris Yap",
  forgotPassword: "Sifreni mi Unuttun?",
  dontHaveAnAccount: "Hesabiniz Yok mu ?",
  registerHere: "Buradan kayit olun",
  credentialsErrorMessage: "Kullanici adi ve sifre uyusmuyor."
}

const verify = {
  titlePage: "Epostani Dogrula",
  successfulVerification: `E-postanizi basariyla dogruladiniz! Daha fazla bilgi icin bizimle iletisime gecebilirsiniz: <a href='mailto:customerservice@scopemarkets.com' target='_blank'>customerservice@scopemarkets.com</a> ya da buraya tiklayarak temsilcilerimizden birine baglanabilirsiniz.`,
  linkInvalid: `Dogrulama sifresi gecerli degil. <a href='mailto:customerservice@scopemarkets.com' target='_blank'>customerservice@scopemarkets.com</a> ile iletisime gecebilir ya da <a onclick="window.fcWidget.open()">buraya</a>  tiklayarak temsilcilerimizden birine baglanabilirsiniz. Alternatif olarak, zaten dogrulanmis bir hesabiniz varsa buradan giris yapabilirsiniz <a onclick="window.location.replace('/tr/signin')">buraya</a>.`,
  failVerification: `Dogrulama yaparken hata olustu.Tekrar deneyin ya da email ile iletisime gecin <a href='mailto:customerservice@scopemarkets.com' target='_blank'>customerservice@scopemarkets.com</a> ya da <a onclick="window.fcWidget.open()">buraya</a> tiklayarak temsilcilerimizden biri ile iletisime gecin. Alternatif olarak hesabinizi dogruladiysaniz buradan giris yapabilirsiniz <a onclick="window.location.replace('/tr/signin')">buraya</a>.`
}

const footer = {
  legalInformation: "Yasal Bilgi",
  legalInformationText: "Scope Markets Ltd Belize de 145,138 kayit numarasi ile kayitli bir sirkettir. Scope Markets Ltd, 000274/222 ve 000274/221 lisans numaralari altinda Belize Uluslararasi Finansal Hizmetler Komisyonu (IFSC) tarafindan yetkilendirilir ve duzenlenir. Scope Markets Ltd., 6160 Park Avenue, Buttonwood Bay, Lower Flat Office Space Front, Belize City, Belize adresi ile kayitlidir.",
  riskWarning: "Risk Uyarısı",
  riskWarningText: `Lutfen forex islemlerinin ve diger kaldiracli piyasalarin onemli duzeyde risk icerdigini ve tum yatirimcilar icin uygun olmadigini unutmayin.
  Finansal enstrumanlarda alim satim karlarin yani sira kayiplarla da sonuclanabilir ve kayiplariniz ilk yatirim sermayenizden daha buyuk olabilir. Bu tur islemleri gerceklestirmeden once, ilgili riskleri tam olarak anladiginizdan ve gerekirse bagimsiz tavsiye aldiginizdan emin olun. Lutfen {riskDisclosure} okuyun ve tam olarak anladiginizdan emin olun.`,
  restrictedCountries: "Kisitli Bolgeler",
  restrictedCountriesText: `Scope Markets belirli yargi bolgelerinde ikameti olanlara hizmet sunmaz. Lutfen {restrictedCountries} listemizi dikkatlice okuyun.`,
  cookiesPolicyText: `Bu websayfasi size en iyi deneyimi sunmak ve sizi daha iyi tanimak icin cerezleri kullanir.Tarayicinizda cerez kullanimina izin vererek {privacyPolicy} aciklanan tanimlama bilgilerini kullanmamiza izin vermis olursunuz.`,
  copyrightDisclaimer: "© Copyright 2021 Scope Markets. Tum Haklari Saklidir."
}

const resetPasswordDialog = {
  close: "Kapat",
  dialogTitle: "Şifreyi yenile",
  dialogSubtitle: "Şifrenizi buradan sıfırlayabilirsiniz.",
  resetPassword: "Şifreyi yenile", //button
  requestReceivedSuccess: "Isteginiz alindi. Eger bu e-posta adresi ile kayitli bir hesap bulunuyorsa kisa sure icerisinde sifrenizi nasil sifirlayacaginiz ile ilgili talimatlar alacaksiniz."
}

const homePage = {
  signUpTitle: "Üye olmak",
  signUpSubtitle: "Şimdi bir hesap oluşturun.",
  signUpButton: "Kayıt olmak",
  signInTitle: "Tekrar hoşgeldiniz!",
  signInSubtitle: "Bizimle bağlantıda kalmak için lütfen kişisel bilgilerinizle giriş yapın.",
  signInButton: "Giris Yapin",
}

const header = {
  language: "Dilim"
}

const validations = {
  messages: {
    "alpha": "{_field_} yalnızca harf içerebilir",
    "alpha_dash": "{_field_} alanı harf ve tire (-) ya da alttan tire (_) içerebilir",
    "alpha_num": "{_field_} yalnızca harf ve rakam içerebilir",
    "alpha_spaces": "{_field_} yalnızca harf boşluk (space) içerebilir",
    "between": "{_field_} {min} ile {max} aralığında olmalıdır",
    "confirmed": "{_field_} doğrulaması hatalı",
    "digits": "{_field_} sayısal ve {length} basamaklı olmalıdır",
    "dimensions": "{_field_} alanı {width} piksel ile {height} piksel arasında olmalıdır",
    "email": "{_field_} alanının geçerli bir e-posta olması gerekir",
    "excluded": "{_field_} alanına geçerli bir değer giriniz",
    "ext": "{_field_} alanı geçerli bir dosya olmalıdır",
    "image": "{_field_} alanı resim dosyası olmalıdır",
    "oneOf": "{_field_} alanına geçerli bir değer giriniz",
    "max": "{_field_} alanı {length} karakterden fazla olmamalıdır",
    "max_value": "{_field_} alanı {max} ya da daha az bir değer olmalıdır",
    "mimes": "{_field_} geçerli bir dosya olmalıdır",
    "min": "{_field_} alanına en az {length} karakter girilmelidir",
    "min_value": "{_field_} alanı {min} ya da daha fazla bir değer olmalıdır",
    "numeric": "{_field_} alanına sayısal bir değer giriniz",
    "regex": "{_field_} en az 8 karakter uzunlugunda olmali en az bir kucuk ve buyuk harf ve bir rakam  icermeli .Bosulklara izin verilmez.",
    "required": "{_field_} alanı gereklidir",
    "required_if": "{_field_} alanı gereklidir",
    "size": "{_field_} alanı {size}KB'dan daha az olmalıdır",
    "double": "{_field_} alanı geçerli bir ondalık olmalıdır",
    "included": "Bu {_field_} kisitli"
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
