# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.29)
# Database: veganmall
# Generation Time: 2023-01-15 20:01:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Blog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Blog`;

CREATE TABLE `Blog` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `author_name` varchar(56) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `describe` varchar(256) DEFAULT NULL,
  `text` longtext,
  `likes` int(11) DEFAULT '0',
  `hits` int(11) DEFAULT '0',
  `comments` int(11) DEFAULT '0',
  `tag` varchar(256) DEFAULT NULL,
  `img` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Blog` WRITE;
/*!40000 ALTER TABLE `Blog` DISABLE KEYS */;

INSERT INTO `Blog` (`id`, `customer_id`, `author_name`, `title`, `describe`, `text`, `likes`, `hits`, `comments`, `tag`, `img`)
VALUES
	(1,1,'West-slope','My journey to be a vegan','How  to change from a picky gourmet to a vegan','<p>I am West-slope , a Beijing girl who has been a vegan for about eight years. Also, I work for Vegan Planet as a part-time blog article writer, I enjoy my work. I was a returned student fron Ireland...</p>',22,33,6,'veg life','article1.jpeg'),
	(2,2,'caijin','The story of beyond-beef noodles','What if the highly popular serial restaurant Mr.Lee offers vegan meat for vegans?','   <p>I have to say that I am a big fan of Mr.Lee\'s noodles, even though it\'s price is a little bit high for a young student. During my high-school years, the moments I enjoyed most was to go to Mr.Lee opposite my campus for lunch, and the red slogan was so warm for me. </p>\n   <p>Since 2022, after being admitted by Communication University of China, I decided to become a vegan. Surprisingly , I found menu for vegans in Mr.Lee——the Beyond Beef Noodles!</p>',33,44,1,'vegan meat','article2.jpeg'),
	(3,10,'vegDr Xu','Cure without medicine','The diet can save your life','<p>I am a professor and I have been focusing on vegan nutrition for half of my life. And I am a vegan myself. I think to encourage more people to transform to  be vegrttarians, we doctors are supposed to be pioneers</p>',111,1123,55,'veg nutrition','article3.jpeg');

/*!40000 ALTER TABLE `Blog` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table blog_comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_comment`;

CREATE TABLE `blog_comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `customer_name` varchar(25) DEFAULT NULL,
  `blog_id` int(11) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `blog_comment` WRITE;
/*!40000 ALTER TABLE `blog_comment` DISABLE KEYS */;

INSERT INTO `blog_comment` (`id`, `customer_id`, `customer_name`, `blog_id`, `comment`, `create_time`)
VALUES
	(1,1,'zhanglixiang',1,'Very enlightening ideas!','2022-04-01 17:16:57'),
	(2,10,'joyhe',2,'Great! Go go vegan!','2022-04-02 03:46:58'),
	(3,10,'joyhe',1,'Great aaaaaaaaq','2022-04-02 09:23:22'),
	(5,10,'joyhe',1,'Great aaujvdhkbtlhnp','2022-04-02 09:51:21'),
	(6,10,'joyhe',1,'Great wojiuxihuaan','2022-04-02 09:59:28'),
	(7,13,'test',1,'auuuuuuuuu my god','2022-04-02 10:00:41'),
	(8,13,'test',1,'heihei','2022-04-02 10:03:20');

/*!40000 ALTER TABLE `blog_comment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Cart
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Cart`;

CREATE TABLE `Cart` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `product_selected` tinyint(1) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;

INSERT INTO `Cart` (`id`, `product_id`, `quantity`, `product_selected`, `customer_id`)
VALUES
	(1,1,1,0,1),
	(2,2,1,0,1),
	(3,3,1,0,2),
	(8,3,10,1,10),
	(11,1,25,1,10);

/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Category`;

CREATE TABLE `Category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;

INSERT INTO `Category` (`id`, `name`, `status`, `parent_id`)
VALUES
	(1,'vegan meat',1,NULL),
	(2,'vegan cookies',1,NULL),
	(3,'vegan clothes',1,NULL),
	(4,'soy milks',1,NULL),
	(5,'vegan life',1,NULL),
	(6,'vegan books',1,5),
	(7,'vegan seasonings',1,NULL),
	(8,'speacial orders',1,NULL);

/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Customers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Customers`;

CREATE TABLE `Customers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(256) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `pwd` varchar(256) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `icon` varchar(256) DEFAULT NULL,
  `veg_type` int(11) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;

INSERT INTO `Customers` (`id`, `user_name`, `phone_number`, `email`, `pwd`, `age`, `gender`, `icon`, `veg_type`, `create_time`, `update_time`)
VALUES
	(1,'zhanglixiang','12345678901','zlx980508@sina.com','980508',24,1,'ttt',5,'2022-02-17 04:37:24','2022-02-17 04:37:24'),
	(2,'caijin','13567890345','caijin@wt.com','111111',25,1,'aaa',0,'2022-02-17 04:37:24','2022-02-17 04:45:16'),
	(3,'Eash','13088876664','johneash@qq.com','222222',25,1,'hhh',0,'2022-02-17 04:37:24','2022-02-17 04:47:21'),
	(8,'hejie','12356731267','joyhe@gmail.com','xsjrz',25,0,'uuu',3,'2022-02-17 04:37:24','2022-02-18 03:26:31'),
	(9,'zhaoyao','12347689013','yao12@kaiche.com','laosiji',25,1,'kkk',5,'2022-02-17 04:37:24','2022-02-18 03:27:42'),
	(10,'joyhe','12347689099','1612333@nankai.edu','f7e0b956540676a129760a3eae309294',25,1,'hhh',5,'2022-02-20 11:40:25','2022-02-20 11:40:25'),
	(13,'test','1','1','c4ca4238a0b923820dcc509a6f75849b',1,1,NULL,5,'2022-04-02 08:08:51','2022-04-02 08:08:51'),
	(14,'admin','123','admin@admin.com','21232f297a57a5a743894a0e4a801fc3',25,0,'hhh',5,'2022-04-16 13:09:21','2022-04-16 13:09:21');

/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table friend
# ------------------------------------------------------------

DROP TABLE IF EXISTS `friend`;

CREATE TABLE `friend` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `religion` tinyint(1) DEFAULT NULL,
  `religion_name` varchar(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `intro` longtext,
  `veg_age` int(11) DEFAULT NULL,
  `expectation` longtext,
  `pic` varchar(500) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `friend` WRITE;
/*!40000 ALTER TABLE `friend` DISABLE KEYS */;

INSERT INTO `friend` (`id`, `name`, `age`, `customer_id`, `religion`, `religion_name`, `height`, `intro`, `veg_age`, `expectation`, `pic`, `contact`)
VALUES
	(1,'sujue',24,2,0,'',180,'I am a vegan and I take pride in my life style. I have been a vegan since. I was 12 and never given up',12,'Kind, benign girl between 20-24 .The most important thing is love, understanding and tolerance','friend1.jpeg','15002217161'),
	(2,'wanghaan',32,11,1,'Buddism',172,'Vegan body builder, enjoy reading and travelling',3,'NNice friends share similar opinions on animal liberation and religious belief','friend2.jpeg','sss@sina.com'),
	(4,'xiaojuan',25,32,0,'',157,'Vegan girls witth my own twitter:  Vegbeauty',4,'Just join my group and get vegan infos','friend4.jpeg','vegsis');

/*!40000 ALTER TABLE `friend` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Order`;

CREATE TABLE `Order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `order_date` datetime DEFAULT NULL,
  `finish_date` datetime DEFAULT NULL,
  `shipping_id` int(11) DEFAULT NULL,
  `receiver_name` varchar(222) DEFAULT NULL,
  `receiver_phone` char(11) DEFAULT NULL,
  `receiver_addr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Order` WRITE;
/*!40000 ALTER TABLE `Order` DISABLE KEYS */;

INSERT INTO `Order` (`id`, `customer_id`, `price`, `status`, `order_date`, `finish_date`, `shipping_id`, `receiver_name`, `receiver_phone`, `receiver_addr`)
VALUES
	(1,1,100,2,NULL,NULL,4,'张三丰','18688888888','天坛'),
	(498525,10,56,6,'2022-03-10 18:54:47',NULL,NULL,'张思','11113456782','holland '),
	(107077177,1,30,1,NULL,NULL,NULL,'张三丰','18688888888','中关村'),
	(850018200,10,56,1,'2022-03-11 11:12:23',NULL,NULL,'张思','11113456782','holland ');

/*!40000 ALTER TABLE `Order` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table OrderProduct
# ------------------------------------------------------------

DROP TABLE IF EXISTS `OrderProduct`;

CREATE TABLE `OrderProduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单子表id',
  `order_no` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL COMMENT '商品id',
  `product_name` varchar(100) DEFAULT NULL COMMENT '商品名称',
  `product_image` varchar(500) DEFAULT NULL COMMENT '商品图片地址',
  `unit_price` decimal(20,2) DEFAULT NULL COMMENT '生成订单时的商品单价，单位是元,保留两位小数',
  `count` int(10) DEFAULT NULL COMMENT '商品数量',
  `total_price` decimal(20,2) DEFAULT NULL COMMENT '商品总价,单位是元,保留两位小数',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_no_index` (`order_no`) USING BTREE,
  KEY `order_no_user_id_index` (`order_no`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `OrderProduct` WRITE;
/*!40000 ALTER TABLE `OrderProduct` DISABLE KEYS */;

INSERT INTO `OrderProduct` (`id`, `order_no`, `product_id`, `product_name`, `product_image`, `unit_price`, `count`, `total_price`, `create_time`, `update_time`)
VALUES
	(5,107077177,1,'Qishan veg meat',NULL,10.00,1,10.00,NULL,NULL),
	(6,107077177,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL),
	(7,194760747,1,'Qishan veg meat',NULL,10.00,2,20.00,NULL,NULL),
	(8,194760747,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL),
	(9,495690729,1,'Qishan veg meat',NULL,10.00,2,20.00,NULL,NULL),
	(17,203243423,1,'Qishan veg meat',NULL,10.00,2,20.00,NULL,NULL),
	(18,203243423,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL),
	(19,697110346,1,'Qishan veg meat',NULL,10.00,1,10.00,NULL,NULL),
	(20,697110346,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL),
	(21,460141058,1,'Qishan veg meat',NULL,10.00,1,10.00,NULL,NULL),
	(22,460141058,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL),
	(23,470896731,1,'Qishan veg meat',NULL,10.00,1,10.00,NULL,NULL),
	(24,470896731,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL),
	(25,498525,1,'Qishan veg meat',NULL,10.00,1,10.00,NULL,NULL),
	(26,498525,2,'Pure vegan cake',NULL,20.00,1,20.00,NULL,NULL);

/*!40000 ALTER TABLE `OrderProduct` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table payInfo
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payInfo`;

CREATE TABLE `payInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `order_no` bigint(20) NOT NULL COMMENT '订单号',
  `pay_platform` int(10) DEFAULT NULL COMMENT '支付平台:1-支付宝,2-微信',
  `platform_number` varchar(200) DEFAULT NULL COMMENT '支付流水号',
  `platform_status` varchar(20) DEFAULT NULL COMMENT '支付状态',
  `pay_amount` decimal(20,2) NOT NULL COMMENT '支付金额',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uqe_order_id` (`order_no`),
  UNIQUE KEY `uqe_platform_number` (`platform_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `subtitle` varchar(256) DEFAULT NULL,
  `detail` longtext,
  `price` decimal(10,0) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `sold_number` int(11) DEFAULT NULL,
  `producer` varchar(60) DEFAULT NULL,
  `tag` varchar(30) DEFAULT NULL,
  `alt` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;

INSERT INTO `Product` (`id`, `category_id`, `name`, `subtitle`, `detail`, `price`, `stock`, `status`, `create_time`, `update_time`, `sold_number`, `producer`, `tag`, `alt`)
VALUES
	(1,1,'Qishan veg meat','Nice taste ! New version !','Delectable mince meat spiced with the authentic flavours of Darjeeling, these handmade momos will steal a piece of your heart. 100% made of plant, containing wheat and soy, but with taste and texture that feels just like chicken. And it has zero cholesterol, did we mention? This momo will make you scream more more.\n\n(This product is available in majority of  pincodes in these cities. Delhi, Mumbai, Pune, Ahmedabad, Bangalore, Hyderabad, Kochi, Chennai, Kolkata, Chandigarh, Lucknow, Jaipur, Coimbatore & Indore.)\n\nPlant-Based Cruelty-Free Ethical Vegan product in category Vegan Mock Meat.',10,55541,1,NULL,NULL,100,'Qishan LTD','veg meat','3 in 1'),
	(2,3,'Pure vegan cake','Egg AND Milk FREE! Vegan Freindly cakes!','veg cake',20,4435,1,NULL,NULL,88,'Pure veg','fat-free','4 favors'),
	(3,9,' Ocean Heart Shoes','Made of enviornment-friendly matrials','vegan friendly shoes',320,34,1,NULL,NULL,77,'Adidas','newly come',NULL),
	(4,5,'Chocolate Soy Milk ','Low Fat High Proteins','lot fat soy bean milk',1000,22,1,NULL,NULL,33,'OATLEY','low-fat','50% off'),
	(5,5,'Delicate vase for plants','Beautify your vegan life!','vases',24,11,1,NULL,NULL,66,'Vega flowers','flower',NULL),
	(6,6,'IMMUNITY BOOSTERS','Sri Sri Tattva Nasal Inhaler, 0.5ml','book',74,55555,1,NULL,NULL,44,'Zhongxin Publish','2nd version',NULL),
	(7,7,'Vegan sesonings combo','Seasonings for hotpots!','seasonings combo',12,3333,1,NULL,NULL,72,'Qishan LTD','combo',NULL),
	(8,5,'Sales for soy bean milk','Weiwei soy, full of nutrient','veg milk',2,888,1,NULL,NULL,166,'We vegan',NULL,'30% off');

/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table product_comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_comment`;

CREATE TABLE `product_comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `customer_name` varchar(256) DEFAULT NULL,
  `score` decimal(10,0) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `comment` varchar(256) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `product_id` int(11) DEFAULT NULL,
  `product_name` varchar(256) DEFAULT NULL,
  `comm_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `product_comment` WRITE;
/*!40000 ALTER TABLE `product_comment` DISABLE KEYS */;

INSERT INTO `product_comment` (`id`, `customer_id`, `customer_name`, `score`, `order_id`, `comment`, `create_time`, `product_id`, `product_name`, `comm_type`)
VALUES
	(1,1,'zhanglixiang',4,1,'Nice','2022-01-02 11:12:12',1,'Qishan veg meat',1),
	(2,2,'caijin',5,2,'Very vegan friendly!Enjoy it!','2022-01-04 11:22:33',2,'Pure vegan cake',1),
	(3,1,'zhangs',5,11,'good','2022-03-12 11:15:12',3,'nice www',1),
	(4,10,'joyhe',NULL,NULL,'good','2022-04-20 22:07:31',1,NULL,NULL),
	(5,10,'joyhe',5,NULL,'hhhhh','2022-05-01 11:18:32',22,NULL,1);

/*!40000 ALTER TABLE `product_comment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table product_img
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_img`;

CREATE TABLE `product_img` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `is_main` tinyint(1) DEFAULT NULL,
  `src` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `product_img` WRITE;
/*!40000 ALTER TABLE `product_img` DISABLE KEYS */;

INSERT INTO `product_img` (`id`, `product_id`, `is_main`, `src`)
VALUES
	(1,1,1,'prod1.jpeg'),
	(2,1,0,'detail1-1.jpeg'),
	(3,2,1,'prod2.jpeg'),
	(4,2,0,'veg2-1.png'),
	(5,3,1,'prod3.jpeg'),
	(6,4,1,'prod4.jpeg'),
	(7,5,1,'prod5.jpeg'),
	(8,6,1,'prod6.jpeg'),
	(9,7,1,'prod7.jpeg'),
	(10,8,1,'prod8.jpeg');

/*!40000 ALTER TABLE `product_img` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table restaurant
# ------------------------------------------------------------

DROP TABLE IF EXISTS `restaurant`;

CREATE TABLE `restaurant` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `region` varchar(20) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `info` varchar(6000) DEFAULT NULL,
  `img` char(20) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;

INSERT INTO `restaurant` (`id`, `region`, `address`, `info`, `img`, `score`, `name`, `type`, `price`)
VALUES
	(1,'Beijing','Yonghe temple, No.2','The most popular vegan restauant in Beijing, scored the highest and among MIchilin 3 stars restaurants.','restaurant1.jpg',5,'King\'s Joy',1,220),
	(2,'Beijing','Qianmen East Avenue No.11','With history of over 40 years, the most famous serial vegan restaurant VIRTUE Temple in Beijing','restaurant2.png',4.4,'Virtue Wood',1,30),
	(3,'Beijing','Old City, Eight Corner Valley No.24','Located in busy shopping center but very cozy and vegan-friendly cafe','restaurant3.jpg',4.3,'Willing vegan',2,13),
	(4,'Beijing','Beijing West Railway Station, near Liuli Bridge','Owned by a vegan couple full of benign and took care many cats, they wanna spread their kind and love','restaurant4.jpg',4.5,'Just Go Vegan',1,15),
	(5,'Beijing','Song Valley, Tand Road No.2','Enjoy vegan life and spread vegan culture, go vegan is our attitude','restaurant5.jpg',4.6,'Vegan Era',3,45),
	(6,'Shanghai','ZhongShan Park Jiangsu Road','Top ranked vegan cafe in Shanghai , never let customers down','restaurant6.jpg',4.5,'Blessing And Intelligence',4,100);

/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table restaurant_comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `restaurant_comment`;

CREATE TABLE `restaurant_comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `customer_name` varchar(256) DEFAULT NULL,
  `score` decimal(10,0) DEFAULT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  `comment` varchar(5000) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `restaurant_comment` WRITE;
/*!40000 ALTER TABLE `restaurant_comment` DISABLE KEYS */;

INSERT INTO `restaurant_comment` (`id`, `customer_id`, `customer_name`, `score`, `restaurant_id`, `comment`, `create_time`)
VALUES
	(1,1,'zhangsan',5,1,'Very descent','2022-04-11 08:54:46'),
	(2,1,'zhangsan',5,2,'Vegan friendly','2022-04-11 08:55:08'),
	(4,10,'joyhe',5,4,'Vely good','2022-04-11 09:25:48'),
	(5,10,'joyhe',5,3,'Willing vegan! Very nice','2022-04-11 09:29:18');

/*!40000 ALTER TABLE `restaurant_comment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Shipping
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Shipping`;

CREATE TABLE `Shipping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `receiver_name` varchar(20) DEFAULT NULL COMMENT '收货姓名',
  `receiver_phone` varchar(20) DEFAULT NULL COMMENT '收货固定电话',
  `receiver_mobile` varchar(20) DEFAULT NULL COMMENT '收货移动电话',
  `receiver_province` varchar(20) DEFAULT NULL COMMENT '省份',
  `receiver_city` varchar(20) DEFAULT NULL COMMENT '城市',
  `receiver_district` varchar(20) DEFAULT NULL COMMENT '区/县',
  `receiver_address` varchar(200) DEFAULT NULL COMMENT '详细地址',
  `receiver_zip` varchar(6) DEFAULT NULL COMMENT '邮编',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Shipping` WRITE;
/*!40000 ALTER TABLE `Shipping` DISABLE KEYS */;

INSERT INTO `Shipping` (`id`, `user_id`, `receiver_name`, `receiver_phone`, `receiver_mobile`, `receiver_province`, `receiver_city`, `receiver_district`, `receiver_address`, `receiver_zip`, `create_time`, `update_time`)
VALUES
	(4,1,'张三丰','010','18688888888','北京','北京市','海淀区','中关村','100000','2000-01-22 14:26:25','2000-01-22 14:26:25'),
	(6,1,'张无忌','01011012012','15577862341','北京','北京市','丰田台区','无何有之乡','888890',NULL,NULL),
	(7,10,'chichi','024','12345678033','HeBei','a CITY',' B DISTRICT','C Avnenuce D Block','111111',NULL,NULL),
	(12,10,'I am hj','01023456789','13467890345','Beijing','Shenyang',NULL,'Yuetnan','110110',NULL,NULL);

/*!40000 ALTER TABLE `Shipping` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
