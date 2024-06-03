USE [master]
GO
/****** Object:  Database [ClientesDB]    Script Date: 03/06/2024 01:34:45 a. m. ******/
CREATE DATABASE [ClientesDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ClientesDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ClientesDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ClientesDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ClientesDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [ClientesDB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ClientesDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ClientesDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ClientesDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ClientesDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ClientesDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ClientesDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [ClientesDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ClientesDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ClientesDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ClientesDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ClientesDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ClientesDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ClientesDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ClientesDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ClientesDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ClientesDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ClientesDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ClientesDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ClientesDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ClientesDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ClientesDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ClientesDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ClientesDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ClientesDB] SET RECOVERY FULL 
GO
ALTER DATABASE [ClientesDB] SET  MULTI_USER 
GO
ALTER DATABASE [ClientesDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ClientesDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ClientesDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ClientesDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ClientesDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ClientesDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ClientesDB', N'ON'
GO
ALTER DATABASE [ClientesDB] SET QUERY_STORE = ON
GO
ALTER DATABASE [ClientesDB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ClientesDB]
GO
/****** Object:  User [bgomez]    Script Date: 03/06/2024 01:34:45 a. m. ******/
CREATE USER [bgomez] FOR LOGIN [bgomez] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 03/06/2024 01:34:45 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NULL,
	[Direccion] [nvarchar](200) NULL,
	[Telefono] [nvarchar](15) NULL,
	[Identificador] [nvarchar](50) NULL,
	[FechaCreacion] [datetime] NOT NULL,
	[CorreoElectronico] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [ClientesDB] SET  READ_WRITE 
GO
