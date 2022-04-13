const legal = {
  termsAndConditions: "Các điều khoản và điều kiện",
  privacyPolicy: "Chính sách Bảo mật",
  noticeRiskDisclosure: "Thông báo Tiết lộ Dịch",
  riskDisclosure: "Tiết lộ rủi ro",
  restrictedCountries: "Các quốc gia bị hạn",
  termsAndConditionsApply: "Điều khoản và điều kiện được áp dụng",
  bonusTermsAndConditions:"Điều khoản và Điều"
}

const register = {
  titlePage: "Mở một tài khoản", //Open an Account
  name: "Tên",
  lastName: "Họ",
  email: "Email",
  countryOfResidence: "Quốc gia cư trú",
  countryOfResidenceLabel: "Chọn quốc gia cư trú",
  prefix: "Tiếp đầu ngữ",
  phone: "Điện thoại",
  phoneLabel: "Nhập số điện thoại của bạn",
  phoneHint: "Số điện thoại phải từ 6-20 ký tự",
  password: "Mật khẩu",
  passwordHint: "Mật khẩu phải dài ít nhất 8 ký tự, có ít nhất một ký tự in hoa, một ký tự thường và một chữ số, KHÔNG sử dụng khoảng trống",
  bzTac: `Tôi đồng ý với các {termsAndConditions}, {privacyPolicy} va {bonusTermsAndConditions} kiện của chương trình thưởng nạp lần đầu.`,
  marketing_agreement: "Bằng cách đăng ký, bạn đồng ý nhận thông tin tiếp thị và quảng cáo. Bạn có thể không nhận bất cứ lúc nào.",
  submit: "MỞ TÀI KHOẢN",
}

const resultDialog = {
  errorTitle: "LỖI",
  connectionFailedMessage: `Kết nối thất bại! Vui lòng thử lại hoặc liên hệ với chúng tôi tại <a href="mailto:customerservice@scopemarkets.com">customerservice@scopemarkets.com</a>`,
  issueWithRegistration: "Đã có một vấn đề với đăng ký của bạn! Vui lòng thử lại hoặc liên hệ với chúng tôi.",
  close: "Đóng",
}

const clippedSection = {
  mainText: `Tại Scope Markets, chúng tôi mang đến cho tất cả khách hàng mới <span class='color-gold'> 50% </span> tiền thưởng khi bạn nạp tiền từ $100 đến $100000.`
}

const ctaButtons = {
  startTradingNowButton: "Bắt đầu giao dịch ngay."
}

const firstSection = {
  header: `Tặng <span class='color-gold'>50%</span> khi nạp tiền, tiền thưởng lên đến <span class='color-gold'>$50,000</span><span class='font-size-26' style='vertical-align: text-top'>*</span>`,
  subheader: "Mở tài khoản ngay hôm nay và nhận 50% tiền thưởng cho khoản tiền nạp đầu tiên, tổng tiền thưởng lên đến $50,000",
  minDepositDisclaimer: "Tiền nạp tối thiểu là $100*"
}

const simpleStepsClaimBonus = {
  title: "Làm theo 4 bước sau để nhận tiền thưởng của bạn",
  stepOneTitle: "Bước 1: Mở tài khoả",
  stepOneText: "Điền vào mẫu thông tin trực tuyến của chúng tôi và mở một tài khoản giao dịch thật (tiền thật).",
  stepTwoTitle: "Bước 2: Xác nhận",
  stepTwoText: "Xác nhận tài khoản thông qua đội ngũ hỗ trợ khách hàng mới (cung cấp chứng từ nhận diện và chứng cứ địa chỉ.)",
  stepThreeTitle: "Bước 3: Nạp tiền vào tài khoản",
  stepThreeText: "Nạp tiền vào tài khoản giao dịch của bạn với mức tối thiểu là $100 hoặc số tiền Việt Nam tương tự.",
  stepFourTitle: "Bước 4: Bắt đầu giao dịch",
  stepFourText: "Tiền thưởng của bạn sẽ được ghi có vào tài khoản giao dịch trong vòng 48 tiếng."
}

const importantBonusTerms = {
  title: `ĐIỀU KHOẢN TIỀN <br> THƯỞNG QUAN TRỌNG`,
  termOne: "Số tiền gửi lần đầu tiên tối thiểu để nhận tiền thưởng là $ 100 hoặc tiền Việt Nam tương đương (đối với số tiền thưởng tối thiểu là $ 50). Số tiền gửi lần đầu tiên tối đa để nhận thưởng là 100.000 đô Mỹ (tiền thưởng tối đa là 50.000 đô Mỹ).",
  termTwo: `Chỉ gửi tiền lần đầu mới đủ điều kiện nhận tiền thưởng. Nếu khách hàng thực hiện nhiều khoản tiền gửi lần đầu tiên thì chỉ khoản tiền gửi đầu tiên sẽ đủ điều kiện nhận tiền thưởng.
<br><br>
<strong>Ví dụ:</strong> Nếu khách gửi 200 đô Mỹ, 10 phút sau gửi thêm 300 đô nữa, thì chỉ 200 đô đầu tiên sẽ nhận được tiền thưởng là 100 đô la (200 đô x 50%).`,
  termThree: "Tiền thưởng có thể được rút ra sau khi đáp ứng yêu cầu khối lượng giao dịch tối thiểu với tỷ lệ $1 tiền thưởng cho mỗi 0,25 lô quay vòng được giao dịch. Do đó, để rút 50 đô tiền thưởng, khách hàng cần giao dịch 12,5 lô quay vòng.",
  termFour: `Lô quay vòng với mục đích đáp ứng yêu cầu về khối lượng giao dịch tối thiểu tiền thưởng là lô MT4/5 tiêu chuẩn Scope Markets, được giao dịch theo cả hai hướng (vị thế phải được mở và đóng), được chỉ định theo Đặc điểm kỹ thuật của công cụ đủ điều kiện, theo Kích thước hợp đồng, bên trong thiết bị đầu cuối giao dịch MT4 / 5 của khách hàng.

    <br> <br>
     <strong>Ví dụ:</strong> 1 lô quay vòng EURUSD = 100,000 EUR được mở và đóng; 1 vòng quay số XAUUSD = 100 oz vàng được mở và đóng.`,
  termFive: "Thuật ngữ quay vòng có nghĩa là vị thế cần được mở và đóng trước khi được coi là đủ điều kiện.",
  termSix: "Chỉ giao dịch trên các công cụ thuộc danh mục ngoại hối (tất cả), kim loại (vàng, bạc, bạch kim, v.v.) và năng lượng (dầu thô, khí tự nhiên, v.v.) mới đủ điều kiện để đáp ứng yêu cầu khối lượng giao dịch tối thiểu.",
  termSeven: `Chỉ tiền của chính khách hàng mới có thể được sử dụng làm tiền ký quỹ. Số tiền thưởng không thể được sử dụng như một khoản ký quỹ bổ sung, có nghĩa là một cuộc gọi ký quỹ sẽ được thực hiện khi một phần vốn tự có của khách hàng giảm xuống dưới 100% yêu cầu ký quỹ và (các) vị thế giao dịch của khách hàng sẽ bị dừng khi nó giảm xuống 50% hoặc thấp hơn.
<br><br>
<strong>Ví dụ:</strong> Khách hàng nạp $100 và nhận $50 tiền thưởng. Tổng vốn chủ sở hữu của khách hàng là 150 đô, nhưng phần vốn tự có của khách hàng trong vốn chủ sở hữu là 100 đô. Khách hàng mở vị thế giao dịch 0.1 lô EURUSD với đòn bẩy 1: 500 và tỷ giá hối đoái EURUSD là 1.15. Yêu cầu ký quỹ của khách hàng để mở vị thế này là 100,000 (1 lô EURUSD) x 0.1 / 500 (đòn bẩy) x 1.15 (tỷ giá EURUSD) = 23 đô. Nếu PnL chưa thực hiện của khách hàng là - 78 đô, tổng vốn chủ sở hữu của khách hàng sẽ giảm xuống còn 150 đô - 78 đô = 72 đô, nhưng phần vốn tự có của khách hàng sẽ giảm xuống còn 100 đô - 78 đô = 22 đô. Vì chỉ quỹ của khách hàng mới có thể được sử dụng làm tiền ký quỹ, nên một cuộc gọi ký quỹ sẽ được đưa ra, vì phần vốn tự có của khách hàng hiện thấp hơn 100% yêu cầu ký quỹ cho vị trí này. Nếu một phần vốn tự có của khách hàng giảm xuống bằng hoặc dưới 50% yêu cầu ký quỹ cho vị trí này hoặc (23 đô / 2 = 11,5 đô trở xuống), vị thế giao dịch sẽ bị dừng.`,
  termEight: "Khách hàng sẽ có 90 ngày sau khi tiền thưởng được ghi có để đáp ứng các yêu cầu về khối lượng giao dịch tối thiểu.",
  termNine: "Khách hàng không được phép rút tiền trước khi đáp ứng yêu cầu về khối lượng giao dịch tối thiểu của tiền thưởng. Nếu khách hàng rút tiền trước đó, tiền thưởng sẽ bị mất.",
  termTen: "Khách hàng phải luôn duy trì mức ký quỹ tối thiểu bắt buộc (phần vốn tự có của khách hàng trên 50% yêu cầu ký quỹ). Nếu khách hàng bị dừng lại, tiền thưởng sẽ bị mất.",
  fullTermsAndConditions: "Bảng Điều khoản và Điều kiện đầy đủ"
}

const whyScopeSection = {
  title: "Vì sao chọn Scope Markets?",
  description: "Scope Markets luôn đồng hành cùng bạn trên từng giao dịch, tài sản và các quyết định về thị trường. Chúng tôi kết hợp giữa khớp lệnh nhanh, phí giao dịch cạnh tranh, phí hoa hồng 0%, và hướng dẫn khách hàng nhằm giúp bạn đạt mục tiêu giao dịch.",
  whyOneTitle: "Nhà môi giới toàn cầu đáng tin cậy",
  whyOneDescription: "Được quản lý bởi Ủy ban Dịch vụ Tài chính Quốc tế (IFSC).",
  whyTwoTitle: "Dịch vụ khách hàng cao cấp",
  whyTwoDescription: "Hỗ trợ khách hàng toàn cầu 24/5 qua email, điện thoại và Chat trực tiếp. Đội hỗ trợ địa phương. Người quản lý tài khoản chuyên dụng.",
  whyThreeTitle: "Giá cả cạnh tranh, minh bạch",
  whyThreeDescription: "Phí hoa hồng 0%, phí chênh lệch thấp, phí qua đêm thấp.",
  whyFourTitle: "Giao dịch đa tài sản",
  whyFourDescription: "Hơn 300 công cụ trong danh mục ngoại hối, hàng hóa, chỉ số, cổ phiếu và ETF.",
  whyFiveTitle: "Giáo dục khách hàng cao cấp",
  whyFiveDescription: "Hội thảo trực tuyến miễn phí hàng ngày và hàng tuần. Hội thảo văn phòng thường xuyên. Các nhà phân tích và giáo dục thị trường nội bộ. Hàng trăm video hội thảo trực tuyến, video hướng dẫn và hướng dẫn được ghi lại."
}

const footer = {
  legalInformation: "Thông tin hợp pháp",
  legalInformationText: "Scope Markets Ltd là một công ty được đăng ký theo Belize với Số đăng ký 145,138. Scope Markets Ltd được ủy quyền và quản lý bởi Ủy ban Dịch vụ Tài chính Quốc tế Belize (“IFSC”) theo giấy phép số 000274/222 và 000274/221. Địa chỉ đăng ký của TNHH Scope Markets là 6160 Đại lộ Park, Vịnh Buttonwood, Lower Flat Office Space Front, Thành phố Belize, Belize.",
  riskWarning: "Cảnh báo rủi ro",
  riskWarningText: `Xin lưu ý rằng giao dịch ngoại hối và kinh doanh các sản phẩm đòn bẩy khác có mức độ rủi ro đáng kể và không phù hợp với tất cả các nhà đầu tư. Kinh doanh các công cụ tài chính có thể dẫn đến thua lỗ cũng như lợi nhuận và khoản lỗ của bạn có thể lớn hơn số vốn đầu tư ban đầu của bạn. Trước khi thực hiện bất kỳ giao dịch nào như vậy, bạn nên đảm bảo rằng bạn hiểu đầy đủ các rủi ro liên quan và tìm kiếm lời khuyên độc lập nếu cần thiết. Vui lòng đọc và đảm bảo rằng bạn hiểu đầy đủ về {riskDisclosure}  của chúng tôi.`,
  restrictedCountries: "Các khu vực hạn chế",
  restrictedCountriesText: `Scope Markets không cung cấp dịch vụ của mình cho cư dân của một số khu vực pháp lý nhất định. Vui lòng đọc kỹ tài liệu {restrictedCountries} chế của chúng tôi.`,
  cookiesPolicyText: `Trang web này sử dụng cookie để cung cấp cho bạn trải nghiệm tốt nhất và hiểu rõ hơn về bạn. Bằng cách truy cập trang web của chúng tôi với trình duyệt của bạn được thiết lập để cho phép cookie, bạn đồng ý với việc chúng tôi sử dụng cookie như được mô tả trong {privacyPolicy} của chúng tôi.`,
  copyrightDisclaimer: "© Bản quyền 2021 Scope Markets. Đã đăng ký Bản quyền."
}

const header = {
  language: "Ngôn ngữ"
}

const socialMedia = {
  twitter:`https://twitter.com/Scope_Markets`,
  facebook: "https://www.facebook.com/scopemarkes.official/",
  linkedin: "https://www.linkedin.com/company/scope-markets",
  instagram: "https://www.instagram.com/scope_markets/"
}

const validations = {
  messages: {
    "alpha": "{_field_} chỉ có thể chứa các kí tự chữ",
    "alpha_dash": "{_field_} có thể chứa các kí tự chữ (A-Z a-z), số (0-9), gạch ngang (-) và gạch dưới (_)",
    "alpha_num": "{_field_} chỉ có thể chứa các kí tự chữ và số",
    "alpha_spaces": "{_field_} chỉ có thế chứa các kí tự và khoảng trắng",
    "between": "{_field_} phải có giá trị nằm trong khoảng giữa {min} và {max}",
    "confirmed": "{_field_} khác với {target}",
    "digits": "Trường {_field_} chỉ có thể chứa các kí tự số và bắt buộc phải có độ dài là {length}",
    "dimensions": "{_field_} phải có chiều rộng {width} pixels và chiều cao {height} pixels",
    "email": "{_field_} phải là một địa chỉ email hợp lệ",
    "excluded": "{_field_} không phải là một giá trị hợp lệ",
    "ext": "{_field_} phải là một tệp",
    "image": "Trường {_field_} phải là một ảnh",
    "oneOf": "{_field_} không phải là một giá trị hợp lệ",
    "max": "{_field_} không thể có nhiều hơn {length} kí tự",
    "max_value": "{_field_} phải nhỏ hơn hoặc bằng {max}",
    "mimes": "{_field_} phải chứa kiểu tệp phù hợp",
    "min": "{_field_} phải chứa ít nhất {length} kí tự",
    "min_value": "{_field_} phải lớn hơn hoặc bằng {min}",
    "numeric": "{_field_} chỉ có thể có các kí tự số",
    "regex": "{_field_} phải dài ít nhất 8 ký tự, phải chứa ít nhất một chữ in hoa, một ký tự thường và một số. Khoảng trống không được phép",
    "required": "{_field_} là bắt buộc",
    "required_if": "{_field_} là bắt buộc",
    "size": "{_field_} chỉ có thể chứa tệp nhỏ hơn {size}KB",
    "double": "{_field_} phải là một số thập phân hợp lệ",
    "included": "Quốc {_field_} bị hạn chế"
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
  header,
  validations,
  socialMedia
}
