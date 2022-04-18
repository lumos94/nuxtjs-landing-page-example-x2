CREATE DATABASE  IF NOT EXISTS `countries_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `countries_db`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: countries_db
-- ------------------------------------------------------
-- Server version	5.7.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `name` tinytext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `iso2` char(3) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `currencyID` int(3) NOT NULL DEFAULT '1',
  `phone_prefix` char(5) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`iso2`),
  KEY `FK_currencyID_countries_idx` (`currencyID`),
  CONSTRAINT `FK_currencyID_countries` FOREIGN KEY (`currencyID`) REFERENCES `currencies` (`currencyID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES ('Andorra','AD',2,'376'),('United Arab Emirates','AE',2,'971'),('Afghanistan','AF',2,'93'),('Antigua and Barbuda','AG',3,'1268'),('Anguilla','AI',4,'1264'),('Albania','AL',2,'355'),('Armenia','AM',1,'374'),('Netherlands Antilles','AN',1,'599'),('Angola','AO',1,'244'),('Antarctica','AQ',1,'672'),('Argentina','AR',1,'54'),('American Samoa','AS',1,'1684'),('Austria','AT',1,'43'),('Australia','AU',1,'61'),('Aruba','AW',1,'297'),('Aland Islands','AX',1,'358'),('Azerbaijan','AZ',1,'994'),('Bosnia and Herzegovina','BA',1,'387'),('Barbados','BB',1,'1246'),('Bangladesh','BD',1,'880'),('Belgium','BE',1,'32'),('Burkina Faso','BF',1,'226'),('Bulgaria','BG',1,'359'),('Bahrain','BH',1,'973'),('Burundi','BI',1,'257'),('Benin','BJ',1,'229'),('Saint Barthélemy','BL',1,'590'),('Bermuda','BM',1,'1441'),('Brunei Darussalam','BN',1,'673'),('Bolivia (Plurinational State of)','BO',1,'591'),('Bonaire, Sint Eustatius and Saba','BQ',1,'599'),('Brazil','BR',1,'55'),('Bahamas','BS',1,'1242'),('Bhutan','BT',1,'975'),('Bouvet Island','BV',1,'55'),('Botswana','BW',1,'267'),('Belarus','BY',1,'375'),('Belize','BZ',1,'501'),('Canada','CA',1,'1'),('Cocos (Keeling) Islands','CC',1,'61'),('Democratic Republic of the Congo','CD',1,'243'),('Central African Republic','CF',1,'236'),('Congo','CG',1,'242'),('Switzerland','CH',1,'41'),('Côte d\'Ivoire','CI',1,'225'),('Cook Islands','CK',1,'682'),('Chile','CL',1,'56'),('Cameroon','CM',1,'237'),('China','CN',1,'86'),('Colombia','CO',1,'57'),('Sark','CQ',1,'44'),('Costa Rica','CR',1,'506'),('Cuba','CU',1,'53'),('Cabo Verde','CV',1,'238'),('Curaçao','CW',1,'599'),('Christmas Island','CX',1,'61'),('Cyprus','CY',1,'357'),('Czechia','CZ',1,'420'),('Germany','DE',1,'49'),('Djibouti','DJ',1,'253'),('Denmark','DK',1,'45'),('Dominica','DM',1,'1767'),('Dominican Republic','DO',1,'1'),('Algeria','DZ',1,'213'),('Ecuador','EC',1,'593'),('Estonia','EE',1,'372'),('Egypt','EG',1,'20'),('Western Sahara','EH',1,'212'),('Eritrea','ER',1,'291'),('Spain','ES',1,'34'),('Ethiopia','ET',1,'251'),('Finland','FI',1,'358'),('Fiji','FJ',1,'679'),('Falkland Islands (Malvinas)','FK',1,'500'),('Micronesia (Federated States of)','FM',1,'691'),('Faroe Islands','FO',1,'298'),('France','FR',1,'33'),('Gabon','GA',1,'241'),('United Kingdom of Great Britain and Northern Ireland','GB',1,'44'),('Grenada','GD',1,'1473'),('Georgia','GE',1,'995'),('French Guiana','GF',1,'594'),('Guernsey','GG',1,'44'),('Ghana','GH',1,'233'),('Gibraltar','GI',1,'350'),('Greenland','GL',1,'299'),('Gambia','GM',1,'220'),('Guinea','GN',1,'224'),('Guadeloupe','GP',1,'590'),('Equatorial Guinea','GQ',1,'240'),('Greece','GR',1,'30'),('South Georgia and the South Sandwich Islands','GS',1,'500'),('Guatemala','GT',1,'502'),('Guam','GU',1,'1671'),('Guinea-Bissau','GW',1,'245'),('Guyana','GY',1,'592'),('China, Hong Kong Special Administrative Region','HK',1,'852'),('Heard Island and McDonald Islands','HM',1,'672'),('Honduras','HN',1,'504'),('Croatia','HR',1,'385'),('Haiti','HT',1,'509'),('Hungary','HU',1,'36'),('Indonesia','ID',1,'62'),('Ireland','IE',1,'353'),('Israel','IL',1,'972'),('Isle of Man','IM',1,'44'),('India','IN',1,'91'),('British Indian Ocean Territory','IO',1,'246'),('Iraq','IQ',1,'964'),('Iran (Islamic Republic of)','IR',1,'98'),('Iceland','IS',1,'354'),('Italy','IT',1,'39'),('Jersey','JE',1,'44'),('Jamaica','JM',1,'1876'),('Jordan','JO',1,'962'),('Japan','JP',1,'81'),('Kenya','KE',1,'254'),('Kyrgyzstan','KG',1,'996'),('Cambodia','KH',1,'855'),('Kiribati','KI',1,'686'),('Comoros','KM',1,'269'),('Saint Kitts and Nevis','KN',1,'1869'),('Democratic People\'s Republic of Korea','KP',1,'850'),('Republic of Korea','KR',1,'82'),('Kuwait','KW',1,'965'),('Cayman Islands','KY',1,'1345'),('Kazakhstan','KZ',1,'7'),('Lao People\'s Democratic Republic','LA',1,'856'),('Lebanon','LB',1,'961'),('Saint Lucia','LC',1,'1758'),('Liechtenstein','LI',1,'423'),('Sri Lanka','LK',1,'94'),('Liberia','LR',1,'231'),('Lesotho','LS',1,'266'),('Lithuania','LT',1,'370'),('Luxembourg','LU',1,'352'),('Latvia','LV',1,'371'),('Libya','LY',1,'218'),('Morocco','MA',1,'212'),('Monaco','MC',1,'377'),('Republic of Moldova','MD',1,'373'),('Montenegro','ME',1,'382'),('Saint Martin (French Part)','MF',1,'590'),('Madagascar','MG',1,'261'),('Marshall Islands','MH',1,'692'),('The former Yugoslav Republic of Macedonia','MK',1,'389'),('Mali','ML',1,'223'),('Myanmar','MM',1,'95'),('Mongolia','MN',1,'976'),('China, Macao Special Administrative Region','MO',1,'853'),('Northern Mariana Islands','MP',1,'1670'),('Martinique','MQ',1,'596'),('Mauritania','MR',1,'222'),('Montserrat','MS',1,'1664'),('Malta','MT',1,'356'),('Mauritius','MU',1,'230'),('Maldives','MV',1,'960'),('Malawi','MW',1,'265'),('Mexico','MX',1,'52'),('Malaysia','MY',1,'60'),('Mozambique','MZ',1,'258'),('Namibia','NA',1,'264'),('New Caledonia','NC',1,'687'),('Niger','NE',1,'227'),('Norfolk Island','NF',1,'672'),('Nigeria','NG',1,'234'),('Nicaragua','NI',1,'505'),('Netherlands','NL',1,'31'),('Norway','NO',1,'47'),('Nepal','NP',1,'977'),('Nauru','NR',1,'674'),('Niue','NU',1,'683'),('New Zealand','NZ',1,'64'),('Oman','OM',1,'968'),('Panama','PA',1,'507'),('Peru','PE',1,'51'),('French Polynesia','PF',1,'689'),('Papua New Guinea','PG',1,'675'),('Philippines','PH',1,'63'),('Pakistan','PK',1,'92'),('Poland','PL',1,'48'),('Saint Pierre and Miquelon','PM',1,'508'),('Pitcairn','PN',1,'64'),('Puerto Rico','PR',1,'1'),('State of Palestine','PS',1,'970'),('Portugal','PT',1,'351'),('Palau','PW',1,'680'),('Paraguay','PY',1,'595'),('Qatar','QA',1,'974'),('Réunion','RE',1,'262'),('Romania','RO',1,'40'),('Serbia','RS',1,'381'),('Russian Federation','RU',1,'7'),('Rwanda','RW',1,'250'),('Saudi Arabia','SA',1,'966'),('Solomon Islands','SB',1,'677'),('Seychelles','SC',1,'248'),('Sudan','SD',1,'249'),('Sweden','SE',1,'46'),('Singapore','SG',1,'65'),('Saint Helena','SH',1,'290'),('Slovenia','SI',1,'386'),('Svalbard and Jan Mayen Islands','SJ',1,'47'),('Slovakia','SK',1,'421'),('Sierra Leone','SL',1,'232'),('San Marino','SM',1,'378'),('Senegal','SN',1,'221'),('Somalia','SO',1,'252'),('Suriname','SR',1,'597'),('South Sudan','SS',1,'211'),('Sao Tome and Principe','ST',1,'239'),('El Salvador','SV',1,'503'),('Sint Maarten (Dutch part)','SX',1,'1721'),('Syrian Arab Republic','SY',1,'963'),('Swaziland','SZ',1,'268'),('Turks and Caicos Islands','TC',1,'1649'),('Chad','TD',1,'235'),('French Southern Territories','TF',1,'262'),('Togo','TG',1,'228'),('Thailand','TH',1,'66'),('Tajikistan','TJ',1,'992'),('Tokelau','TK',1,'690'),('Timor-Leste','TL',1,'670'),('Turkmenistan','TM',1,'993'),('Tunisia','TN',1,'216'),('Tonga','TO',1,'676'),('Turkey','TR',1,'90'),('Trinidad and Tobago','TT',1,'1868'),('Tuvalu','TV',1,'688'),('Taiwan (Republic of China)','TW',1,'886'),('United Republic of Tanzania','TZ',1,'255'),('Ukraine','UA',1,'380'),('Uganda','UG',1,'256'),('United States Minor Outlying Islands','UM',1,'246'),('United States of America','US',1,'1'),('Uruguay','UY',1,'598'),('Uzbekistan','UZ',1,'998'),('Holy See','VA',1,'39'),('Saint Vincent and the Grenadines','VC',1,'1784'),('Venezuela (Bolivarian Republic of)','VE',1,'58'),('British Virgin Islands','VG',1,'1284'),('United States Virgin Islands','VI',1,'1340'),('Viet Nam','VN',1,'84'),('Vanuatu','VU',1,'678'),('Wallis and Futuna Islands','WF',1,'681'),('Samoa','WS',1,'685'),('Yemen','YE',1,'967'),('Mayotte','YT',1,'262'),('South Africa','ZA',1,'27'),('Zambia','ZM',1,'260'),('Zimbabwe','ZW',1,'263');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currencies`
--

DROP TABLE IF EXISTS `currencies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currencies` (
  `currency` char(5) COLLATE utf8_bin NOT NULL,
  `currencyID` int(3) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`currencyID`),
  UNIQUE KEY `currencyID_UNIQUE` (`currencyID`),
  UNIQUE KEY `currency_UNIQUE` (`currency`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currencies`
--

LOCK TABLES `currencies` WRITE;
/*!40000 ALTER TABLE `currencies` DISABLE KEYS */;
INSERT INTO `currencies` VALUES ('EUR',1),('GBP',2),('USD',3),('ZAR',4);
/*!40000 ALTER TABLE `currencies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-18 20:15:52
