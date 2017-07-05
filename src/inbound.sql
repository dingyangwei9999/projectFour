/*
Navicat MySQL Data Transfer

Source Server         : text3
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tan90

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-05 10:42:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `inbound`
-- ----------------------------
DROP TABLE IF EXISTS `inbound`;
CREATE TABLE `inbound` (
  `productID` int(11) NOT NULL AUTO_INCREMENT,
  `qrCode` varchar(255) CHARACTER SET utf8 NOT NULL,
  `productName` varchar(50) CHARACTER SET utf8 NOT NULL,
  `reserveNum` varchar(255) NOT NULL,
  `inbound` varchar(255) NOT NULL,
  `inboundTime` datetime NOT NULL,
  `inboundID` varchar(255) NOT NULL,
  `outbound` varchar(255) NOT NULL,
  `outboundTime` datetime NOT NULL,
  `outboundID` varchar(255) NOT NULL,
  `lastBound` varchar(255) NOT NULL,
  `writedown` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of inbound
-- ----------------------------
INSERT INTO `inbound` VALUES ('2', '112332121', '蒙牛', '123213', '123123', '2017-07-04 20:39:17', '123213', '12321', '2017-07-03 20:39:22', '1', '1', '暂时还没入库');
INSERT INTO `inbound` VALUES ('3', '1225666', '伊利', '123', '123', '2017-07-04 10:26:40', '123', '56', '2017-07-05 10:26:52', '2', '2', '我上传完了');
INSERT INTO `inbound` VALUES ('4', '34444', '洗发水', '333', '333', '2017-07-05 09:05:32', '33', '12321', '2017-07-05 09:05:50', '415', '1', '再次测试');
INSERT INTO `inbound` VALUES ('5', '94615615', '测试↓sb', '1', '1', '2017-07-05 08:40:07', '123', '95', '2017-07-05 08:40:23', '123', '123', '123');
INSERT INTO `inbound` VALUES ('6', '786765', '刘云', '2', '2', '2017-07-05 08:40:46', '2', '2', '2017-07-05 08:40:50', '2', '2', '2');
