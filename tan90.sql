/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tan90

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-05 14:37:55
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
INSERT INTO `inbound` VALUES ('2', '112332121', '蒙牛', '3333', '333', '2017-07-04 20:39:17', '3333', '3333', '2017-07-03 20:39:22', '1', '1', '测试1');
INSERT INTO `inbound` VALUES ('3', '1225666', '伊利', '123', '123', '2017-07-04 10:26:40', '123', '56', '2017-07-05 10:26:52', '2', '2', '我上传完了');
INSERT INTO `inbound` VALUES ('4', '34444', '洗发水', '333', '333', '2017-07-05 09:05:32', '33', '12321', '2017-07-05 09:05:50', '415', '1', '再次测试');
INSERT INTO `inbound` VALUES ('5', '94615615', '测试↓sb', '1', '1', '2017-07-05 08:40:07', '123', '95', '2017-07-05 08:40:23', '123', '123', '123');
INSERT INTO `inbound` VALUES ('6', '786765', '刘云', '2', '2', '2017-07-05 08:40:46', '2', '2', '2017-07-05 08:40:50', '2', '2', '2');

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `ymd` varchar(50) NOT NULL,
  `hms` varchar(50) NOT NULL,
  `odd` varchar(255) NOT NULL,
  `goods` varchar(2000) NOT NULL,
  `printPrice` varchar(50) NOT NULL,
  `printDis` varchar(50) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '2017/7/5', '下午12:55:13', '2017070512540001', '[{\"indexId\":1,\"qrCode\":\"4710944700107\",\"productName\":\"蛮牛MAX COOL无糖口香糖（蜂蜜薄荷）\",\"purchasingCost\":5.5,\"salePrice\":\"8.80\",\"Unit\":2,\"category\":3,\"supplier\":\"2\",\"storageTime\":\"56521211021\",\"storeNum\":\"2\",\"qty\":2,\"totalPrice\":\"17.60\",\"discountPrice\":\"17.60\",\"$$hashKey\":\"object:11\"}]', '17.60', '100');
INSERT INTO `order` VALUES ('2', '2017/7/5', '下午1:02:01', '2017070513000002', '[{\"indexId\":1,\"qrCode\":\"4710944700107\",\"productName\":\"蛮牛MAX COOL无糖口香糖（蜂蜜薄荷）\",\"purchasingCost\":5.5,\"salePrice\":\"8.80\",\"Unit\":2,\"category\":3,\"supplier\":\"2\",\"storageTime\":\"56521211021\",\"storeNum\":\"2\",\"qty\":1,\"totalPrice\":\"8.80\",\"discountPrice\":\"8.80\",\"$$hashKey\":\"object:11\"},{\"indexId\":2,\"qrCode\":\"6923644242923\",\"productName\":\"蒙牛酸酸乳\",\"purchasingCost\":2,\"salePrice\":\"2.50\",\"Unit\":1,\"category\":3,\"supplier\":\"2\",\"storageTime\":\"56521211111\",\"storeNum\":\"0\",\"qty\":2,\"totalPrice\":\"5.00\",\"discountPrice\":\"5.00\",\"$$hashKey\":\"object:13\"}]', '9.94', '80');

-- ----------------------------
-- Table structure for `supplier`
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `ID` varchar(255) NOT NULL,
  `supplierName` varchar(255) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('1', '4172485', '广州天河贸易区百佳批发部');
INSERT INTO `supplier` VALUES ('2', '2213998', '广州友谊副食品批发城');

-- ----------------------------
-- Table structure for `tcategory`
-- ----------------------------
DROP TABLE IF EXISTS `tcategory`;
CREATE TABLE `tcategory` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tcategory
-- ----------------------------
INSERT INTO `tcategory` VALUES ('3', '副食品');
INSERT INTO `tcategory` VALUES ('2', '生活用品');
INSERT INTO `tcategory` VALUES ('1', '学习用品');
INSERT INTO `tcategory` VALUES ('4', '清洁用具');
INSERT INTO `tcategory` VALUES ('5', '汽车配件');
INSERT INTO `tcategory` VALUES ('6', '汽车配件');
INSERT INTO `tcategory` VALUES ('7', '汽车配件');

-- ----------------------------
-- Table structure for `tproducts`
-- ----------------------------
DROP TABLE IF EXISTS `tproducts`;
CREATE TABLE `tproducts` (
  `indexId` int(11) NOT NULL AUTO_INCREMENT,
  `qrCode` varchar(50) NOT NULL,
  `productName` varchar(200) NOT NULL,
  `purchasingCost` float NOT NULL,
  `salePrice` float NOT NULL,
  `Unit` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `supplier` varchar(200) NOT NULL,
  `storageTime` varchar(50) NOT NULL,
  `storeNum` varchar(50) NOT NULL,
  PRIMARY KEY (`indexId`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tproducts
-- ----------------------------
INSERT INTO `tproducts` VALUES ('1', '4710944700107', '蛮牛MAX COOL无糖口香糖（蜂蜜薄荷）', '5.5', '8.8', '2', '3', '2', '56521211021', '2');
INSERT INTO `tproducts` VALUES ('2', '6923644242923', '蒙牛酸酸乳', '2', '2.5', '1', '3', '2', '56521211111', '0');
INSERT INTO `tproducts` VALUES ('3', '9555627102374', '卡勒米斯柠檬味夹心饼干', '4', '7', '1', '3', '2', '1499153209327', '1');
INSERT INTO `tproducts` VALUES ('4', '6923644266066', '特仑苏纯牛奶', '5', '8', '2', '3', '2', '1499153572357', '1');
INSERT INTO `tproducts` VALUES ('5', '6930663302637', '18K HAPPINESS胶套本', '8', '18', '3', '1', '1', '1499156434098', '1');
INSERT INTO `tproducts` VALUES ('6', '6947509910017', '得宝迷你纸手帕（冰薄荷味）', '0.4', '2', '5', '2', '1', '1499156845976', '1');
INSERT INTO `tproducts` VALUES ('7', '6921294308501', '每日C 橙汁饮品', '2', '3', '6', '3', '2', '1499157512361', '1');
INSERT INTO `tproducts` VALUES ('8', '4788900432468', 'L\'OCCITANE', '170', '189', '6', '2', '1', '1499157953101', '1');

-- ----------------------------
-- Table structure for `tsupplier`
-- ----------------------------
DROP TABLE IF EXISTS `tsupplier`;
CREATE TABLE `tsupplier` (
  `indexid` int(200) NOT NULL AUTO_INCREMENT,
  `suppliername` varchar(50) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tsupplier
-- ----------------------------
INSERT INTO `tsupplier` VALUES ('1', '广州天河贸易区百佳批发部');
INSERT INTO `tsupplier` VALUES ('2', '广州友谊副食品批发城');

-- ----------------------------
-- Table structure for `tunit`
-- ----------------------------
DROP TABLE IF EXISTS `tunit`;
CREATE TABLE `tunit` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `unit` varchar(11) NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tunit
-- ----------------------------
INSERT INTO `tunit` VALUES ('1', '袋');
INSERT INTO `tunit` VALUES ('2', '盒');
INSERT INTO `tunit` VALUES ('3', '本');
INSERT INTO `tunit` VALUES ('4', '包');
INSERT INTO `tunit` VALUES ('5', '瓶');
INSERT INTO `tunit` VALUES ('6', '箱');
INSERT INTO `tunit` VALUES ('7', '管');
INSERT INTO `tunit` VALUES ('8', '罐');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `usersId` int(55) NOT NULL AUTO_INCREMENT,
  `usersStatus` varchar(255) NOT NULL,
  `usersStore` varchar(255) NOT NULL,
  `usersName` varchar(255) NOT NULL,
  `usersRole` varchar(255) NOT NULL,
  `usersPassword` varchar(255) NOT NULL,
  `usersPhone` varchar(255) NOT NULL,
  `usersEmail` varchar(255) NOT NULL,
  PRIMARY KEY (`usersId`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '启用', '天河店', 'xrt', '上架管理员', '123456', '13312121212', '123@123.com');
INSERT INTO `users` VALUES ('2', '启用', '番禺店', 'llw', '采购部总监', '123456', '13311111111', '123@123.com');
