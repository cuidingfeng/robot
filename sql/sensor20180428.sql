/*
 Navicat MySQL Data Transfer

 Source Server         : mac
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost
 Source Database       : sensor

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : utf-8

 Date: 04/28/2018 20:33:33 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `datetime`
-- ----------------------------
DROP TABLE IF EXISTS `datetime`;
CREATE TABLE `datetime` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_case_id` int(11) DEFAULT NULL,
  `formatStr` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1' COMMENT '是否开启，1启用，0停用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `datetime`
-- ----------------------------
BEGIN;
INSERT INTO `datetime` VALUES ('1', '14', '*/4 * * * * *', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
