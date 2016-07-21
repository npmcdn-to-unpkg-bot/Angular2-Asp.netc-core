using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using WebShopResource.Config;

namespace WebShopResource.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20160720010900_my_init")]
    partial class my_init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebShopLibrary.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DepartmentName");

                    b.HasKey("Id");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("WebShopLibrary.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ProductName");

                    b.Property<int?>("ProductTypeId");

                    b.HasKey("Id");

                    b.HasIndex("ProductTypeId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("WebShopLibrary.ProductType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("DepartmentId");

                    b.Property<string>("ProductName");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.ToTable("ProductTypes");
                });

            modelBuilder.Entity("WebShopLibrary.Product", b =>
                {
                    b.HasOne("WebShopLibrary.ProductType")
                        .WithMany()
                        .HasForeignKey("ProductTypeId");
                });

            modelBuilder.Entity("WebShopLibrary.ProductType", b =>
                {
                    b.HasOne("WebShopLibrary.Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId");
                });
        }
    }
}
