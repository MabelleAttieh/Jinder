CREATE DATABASE  IF NOT EXISTS `jinder` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `jinder`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: jinder
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application` (
  `application_id` int NOT NULL AUTO_INCREMENT,
  `job_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `status` varchar(20) DEFAULT 'pending',
  PRIMARY KEY (`application_id`),
  KEY `job_id` (`job_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `application_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `new_job` (`job_id`),
  CONSTRAINT `application_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `application_chk_1` CHECK ((`status` in (_utf8mb4'accepted',_utf8mb4'rejected',_utf8mb4'pending')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `industry` varchar(100) NOT NULL,
  `company_size` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `company_logo_URL` varchar(400) DEFAULT NULL,
  `company_email` varchar(100) NOT NULL,
  `company_password` varchar(100) NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'SkyHigh Airlines','Aviation','5000+','A leading airline providing domestic and international flights with a focus on safety and customer service.','http://example.com/logo_skyhigh.png','contact@skyhighairlines.com','$2b$12$J7f5Uq1K3YJQdlVd5YwD86GVGnOlgk/0p1zp1GJqzF6lyFwFOU1Wm'),(2,'ByteWorks','Technology','200-500','A technology company specializing in data analytics and machine learning solutions for businesses.','http://example.com/logo_byteworks.png','info@byteworks.com','$2b$12$DJy8Yg5l.VFFy5FTXoRL9mA1zF7Jh9kXQ.qF8ABgtWR0tffW1gAyO'),(3,'EduSmart','Education','50-100','An online education platform offering a range of courses in various subjects, especially for K-12 students.','http://example.com/logo_edusmart.png','support@edusmart.com','$2b$12$z27zOK4HJ.fgFjkQ1v/ZQU6BY1VGp9m1.kpn5w8b8mcMjR7CZuOTq'),(4,'DreamHomes','Real Estate','100-250','A real estate company helping clients with buying, selling, and renting residential and commercial properties.','http://example.com/logo_dreamhomes.png','contact@dreamhomes.com','$2b$12$hvQIBNS1W0q7ToOEDXm2jIjprllUPg/24NdHiWywQgi07wQvsI4Xe'),(5,'SparkMedia','Media','50-100','A digital media company creating engaging content and managing social media campaigns for brands and influencers.','http://example.com/logo_sparkmedia.png','info@sparkmedia.com','$2b$12$AcvM8qPqeEKEl2f6rH7VleADmNJCUOM.n5jIVttj8TtA0OwvZgA5a'),(6,'QuantumSoft','Technology','200-500','A cybersecurity firm offering advanced protection services for businesses and governments.','http://example.com/logo_quantumsoft.png','contact@quantumsoft.com','$2b$12$W2wOlGbU/q4Sv6iP1kJjxEn1fg2rfUMIHV6yQnRpp27bOYkft9gbu'),(7,'EcoTrend','Consulting','50-100','A sustainability consultancy helping businesses transition to more eco-friendly and sustainable practices.','http://example.com/logo_ecotrend.png','info@ecotrend.com','$2b$12$8dA5og28kC0zRhvT0E2k1y2sXeAB0oEMvw3fTz02KmR4WKH2PKjOy'),(8,'Meditech','Healthcare','100-250','A company providing medical equipment and technology solutions to healthcare providers worldwide.','http://example.com/logo_meditech.png','sales@meditech.com','$2b$12$zwd0DqKCuZjMJXy8TS2C.x9MkKyk7A2H0lbQJ8l.GkaGCWZ2TQpFq'),(9,'NovaRetail','Retail','500-1000','A retail company managing a variety of stores across the country, specializing in consumer electronics and accessories.','http://example.com/logo_novaretail.png','contact@novaretail.com','$2b$12$Kfz07xa4bPA7azb7DaFlN1rF.2MtbVZFl9smqmk9lG76f/JzLVnlW'),(10,'NextGen Labs','Technology','100-250','A research company dedicated to developing cutting-edge AI technologies for various industries.','http://example.com/logo_nextgenlabs.png','info@nextgenlabs.com','$2b$12$A0Z2aGF49cSx.YzzS3v7wVdbqOgm5FZtST41m3pzcnpV9pyFkfvLk');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_job`
--

DROP TABLE IF EXISTS `new_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_job` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `company_id` int DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  PRIMARY KEY (`job_id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `new_job_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_job`
--

LOCK TABLES `new_job` WRITE;
/*!40000 ALTER TABLE `new_job` DISABLE KEYS */;
INSERT INTO `new_job` VALUES (1,1,'Pilot: Operate and navigate airplanes across domestic and international routes.',120000.00),(2,2,'Data Scientist: Analyze large datasets to extract insights and build predictive models.',95000.00),(3,3,'Online Tutor: Teach math and science courses to students via online platforms.',45000.00),(4,4,'Real Estate Agent: Help clients buy, sell, and rent properties.',55000.00),(5,5,'Content Creator: Create engaging digital content for social media campaigns.',48000.00),(6,6,'Cybersecurity Specialist: Protect systems and networks from cyber threats.',105000.00),(7,7,'Sustainability Consultant: Advise companies on eco-friendly practices.',65000.00),(8,8,'Medical Sales Representative: Promote and sell medical equipment to healthcare providers.',78000.00),(9,9,'Store Manager: Oversee daily operations and staff in retail locations.',52000.00),(10,10,'AI Researcher: Research and develop innovative AI technologies.',130000.00);
/*!40000 ALTER TABLE `new_job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `major` varchar(50) NOT NULL,
  `age` int NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `CV_URL` varchar(400) NOT NULL,
  `CL_URL` varchar(400) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`),
  CONSTRAINT `user_chk_1` CHECK ((`gender` in (_utf8mb4'Male',_utf8mb4'Female')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-27 19:47:27
