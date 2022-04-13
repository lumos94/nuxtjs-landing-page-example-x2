const legal = {
  termsAndConditions: "Terms and Conditions",
  privacyPolicy: "Privacy Policy",
  noticeRiskDisclosure: "Risk Disclosure Notice",
  riskDisclosure: "Risk Disclosure",
  restrictedCountries: "Restricted Countries",
    termsAndConditionsApply: "Terms and Conditions apply",
  bonusTermsAndConditions: "First Deposit Bonus Terms and Conditions"
}

const register = {
  titlePage: "Open an account", //Open an Account
  name: "First Name",
  lastName: "Last Name",
  email: "Email",
  countryOfResidence: "Country of Residence",
  countryOfResidenceLabel: "Select Country of Residence",
  phone: "Phone",
  phoneLabel: "Enter your phone number",
  phoneHint: "Phone Number should be between 6-20 characters",
  password: "Password",
  passwordHint: "Password must be at least 8 characters long, must contain at least one uppercase character, one lowercase character, and one number. Spaces are not allowed.",
  bzTac: `I agree to the {termsAndConditions}, {privacyPolicy} and {bonusTermsAndConditions}.`,
  marketing_agreement: "By opening an account with us, you agree to receive our marketing communications. You can opt out at any time.",
  submit: "Open Account",
  prefix: "Prefix"
}

const resultDialog = {
  errorTitle: "ERROR",
  connectionFailedMessage: `Connection failed! Please try again or contact us at <a href="mailto:customerservice@scopemarkets.com">customerservice@scopemarkets.com</a>`,
  issueWithRegistration: "There has been an issue with your registration! Please try again or contact us.",
  close: "Close",
}

const clippedSection = {
  mainText: `Here at Scope Markets we offer all new clients <span class='color-gold'>50%</span> first deposit bonus when you deposit anywhere between $100 and $100,000.`
}

const ctaButtons = {
  startTradingNowButton: "Start Trading Now."
}

const firstSection = {
  header: `<span class='color-gold'>50%</span> deposit bonus up to <span class='color-gold'>$50,000</span><span class='font-size-26' style='vertical-align: text-top'>*</span>`,
  subheader: "Open an account today and claim a 50% bonus on your initial deposit, up to $100,000 (for a bonus up to of $50,000)",
  minDepositDisclaimer: "Min deposit $100*"
}

const simpleStepsClaimBonus = {
  title: "Follow these 4 simple steps to claim your bonus",
  stepOneTitle: "STEP 1: Open an account",
  stepOneText: "Complete our online registration form above and open a live (real-money) trading account.",
  stepTwoTitle: "STEP 2: Get Verified",
  stepTwoText: "Get your account verified by our customer onboarding team (submit a valid proof of ID and proof of address).",
  stepThreeTitle: "STEP 3: Make a Deposit",
  stepThreeText: "Make a deposit and fund your trading account with a minimum of $100 or equivalent in your account currency.",
  stepFourTitle: "STEP 4: Start Trading",
  stepFourText: "Your bonus will be credited to your funded trading account within 48 hours."
}

const importantBonusTerms = {
  title: `IMPORTANT  <br> BONUS TERMS`,
  termOne: "The minimum first-time deposit for the bonus is $100 or equivalent in customer’s account currency (for the minimum bonus amount of $50). The maximum first-time deposit for the bonus is $100,000 (for the maximum bonus amount of $50,000).",
  termTwo: `Only first-time deposit will qualify for the bonus. If the customer makes several first-time deposits only the very first deposit will qualify for the bonus.
<br><br>
<strong>Example: </strong>If a customer makes a deposit of $200, and 10 minutes later makes another $300 deposit, only first $200 will attract a bonus of $100 ($200 x 50%).`,
  termThree: "The bonus can be withdrawn, once the minimum trading volume requirement has been met at a rate of $1 in bonus for every 0.25 round-turn lots traded. Therefore, to withdraw $50 in bonus funds, the customer needs to trade 12.5 round-turn lots.",
  termFour: `A round-turn lot for the purpose of meeting the bonus minimum trading volume requirement is a standard Scope Markets MT4/5 lot, traded in both directions (position has to be opened and closed), specified under eligible instrument’s Specification, under Contract Size, inside customer MT4/5 trading terminal.
    <br> <br>
    <strong>Example: </strong> 1 round-turn lot of EURUSD = 100,000 EUR opened and closed; 1 round-turn lot of XAUUSD = 100 oz of gold opened and closed.`,
  termFive: "The term round-turn means that the position needs to be opened and closed before being considered qualified.",
  termSix: "Only customer’s own funds can be used as a margin. The bonus amount cannot be used as an extra margin, meaning that a margin call will be issued when a customer’s own-funds part of the equity falls below 100% of the margin requirement, and customer’s trading position(s) will be stopped out when it falls to 50% or below.",
  termSeven: `Only customer’s own funds can be used as a margin. The bonus amount cannot be used as an extra margin, meaning that a margin call will be issued when a customer’s own-funds part of the equity falls below 100% of the margin requirement, and customer’s trading position(s) will be stopped out when it falls to 50% or below.
<br><br>
<strong>Example: </strong> Customer deposits $100 and receives $50 in bonus. Customer’s total equity is $150, but customer’s own-funds part of the equity is $100. Customer opens a 0.1 lots EURUSD trading position with 1:500 leverage and EURUSD exchange rate of 1.15. Customer’s margin requirement to open this position is 100,000 (1 lot of EURUSD) x 0.1 / 500 (leverage) x 1.15 (EURUSD exchange rate) = $23. If customer’s unrealized PnL goes into -$78, customer’s total equity will drop to $150 - $78 = $72, but customer’s own-funds part of the equity will drop to $100 - $78 = $22. Since only customer’s own funds can be used as a margin, a margin call is issued, as customer’s own-funds part of the equity is now below 100% of the margin requirement for this position. Should a customer’s own-funds part of the equity fall to or below 50% of the margin requirement for this position, or ($23/2 = $11.5 or below), the trading position will be stopped out.`,
  termEight: "Customer will have 90 days after the bonus is credited to meet the minimum trading volume requirements.",
  termNine: "Customer is not allowed to make a withdrawal before the bonus minimum trading volume requirement is met. If a withdrawal is made before that, the bonus will be forfeited.",
  termTen: "Customer must always maintain the required minimum margin (customer’s own-funds part of the equity above 50% of the margin requirement). If the customer is stopped out, the bonus will be forfeited.",
  fullTermsAndConditions: "Full Terms and Conditions"
}

const whyScopeSection = {
  title: "Why scope markets?",
  description: "Scope Markets is by your side with every trade, asset and market decision. We combine ultra fast order execution, competitive spreads, 0% commission, and client education to help you achieve your trading goals.",
  whyOneTitle: "Trusted Global Broker",
  whyOneDescription: "Regulated by International Financial Services Commission (IFSC).",
  whyTwoTitle: "Premium customer service",
  whyTwoDescription: "24/5 global customer support over email, phone and live chat. Local support teams. Dedicated account managers.",
  whyThreeTitle: "Competitive, Transparent Pricing",
  whyThreeDescription: "0% commission, tight spreads, low overnight fees.",
  whyFourTitle: "Multi-asset trading",
  whyFourDescription: "Over 300+ instruments across forex, commodities, indices, shares and ETFs.",
  whyFiveTitle: "Premium Customer Education",
  whyFiveDescription: "Free daily and weekly webinars. Regular office seminars. In-house market analysts and educators. Hundreds of recorded webinars, video tutorials and guides."
}

const footer = {
  legalInformation: "Legal Information",
  legalInformationText: "Scope Markets Ltd is a company registered under Belize with Registration Number 145,138. Scope Markets Ltd is authorized and regulated by the International Financial Services Commission of Belize (“IFSC”) under the license numbers 000274/222 and 000274/221. The registered address of Scope Markets Ltd is, 6160, Park Avenue, Buttonwood Bay, Lower Flat Office Space Front, Belize City, Belize.",
  riskWarning: "Risk Warning",
  riskWarningText: `Please note that forex trading and trading in other leveraged products involves a significant level of risk and is not suitable for all investors. Trading in financial instruments may result in losses as well as profits and your losses can be greater than your initial invested capital. Before undertaking any such transactions, you should ensure that you fully understand the risks involved and seek independent advice if necessary. Please read and ensure you fully understand our {riskDisclosure}.`,
  restrictedCountries: "Restricted Regions",
  restrictedCountriesText: `Scope Markets does not offer its services to the residents of certain jurisdictions. Please read carefully our {restrictedCountries} document.`,
  cookiesPolicyText: `This website uses cookies to provide you with the very best experience and to know you better. By visiting our website with your browser set to allow cookies, you consent to our use of cookies as described in our {privacyPolicy}.`,
  copyrightDisclaimer: "© Copyright 2021 Scope Markets. All Rights Reserved."
}

const socialMedia = {
  twitter: `https://twitter.com/ScopeMarkets_NG`,
  facebook: "https://www.facebook.com/ScopeMarkets.NG/",
  linkedin: "https://www.linkedin.com/company/scope-markets",
  instagram: "https://www.instagram.com/scopemarkets_ng/"
}
const header = {
  language: "Language"
}
const validations = {
  messages: {
    "alpha_num": "The {_field_} field may only contain alpha-numeric characters.",
    "alpha_dash": "The {_field_} field may contain alpha-numeric characters as well as dashes and underscores.",
    "alpha_spaces": "{_field_} should only contain alphabetic characters or spaces.",
    "between": "The {_field_} field must be between {min} and {max}.",
    "confirmed": "The {_field_} field confirmation does not match.",
    "digits": "The {_field_} field must be numeric and exactly contain {length} digits.",
    "dimensions": "The {_field_} field must be {width} pixels by {height} pixels.",
    "email": "Please enter a valid email address.",
    "excluded": "The {_field_} field is not a valid value.",
    "ext": "The {_field_} field is not a valid file.",
    "image": "The {_field_} field must be an image.",
    "integer": "The {_field_} field must be an integer.",
    "length": "The {_field_} field must be {length} long.",
    "max_value": "The {_field_} field must be {max} or less.",
    "max": "The {_field_} field may not be greater than {length} characters.",
    "mimes": "The {_field_} field must have a valid file type.",
    "min_value": "The {_field_} field must be {min} or more.",
    "min": "The {_field_} field must be at least {length} characters.",
    "numeric": "The {_field_} field may only contain numeric characters.",
    "oneOf": "The {_field_} field is not a valid value.",
    "regex": "{_field_} must be at least 8 characters long, must contain at least one uppercase, one lowercase character and one number. White spaces are not allowed.",
    "required_if": "The {_field_} field is required.",
    "required": "Please enter your {_field_}.",
    "size": "The {_field_} field size must be less than {size}KB.",
    "double": "The {_field_} field must be a valid decimal.",
    "included": "The {_field_} is restricted."
  }
}

export default {
  legal,
  register,
  resultDialog,
  clippedSection,
  ctaButtons,
  firstSection,
  simpleStepsClaimBonus,
  importantBonusTerms,
  whyScopeSection,
  footer,
  socialMedia,
  header,
  validations
}
