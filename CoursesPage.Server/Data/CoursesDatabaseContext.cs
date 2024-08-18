using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace CoursesPage.Server.Data;

public partial class CoursesDatabaseContext : DbContext
{
	private readonly IConfiguration _configuration;

	public CoursesDatabaseContext(IConfiguration configuration)
	{
		_configuration = configuration;
	}

	public CoursesDatabaseContext(DbContextOptions<CoursesDatabaseContext> options, IConfiguration configuration)
		: base(options)
	{
		_configuration = configuration;
	}

	public virtual DbSet<Course> Courses { get; set; }

	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		if (!optionsBuilder.IsConfigured)
		{
			var connectionString = _configuration.GetConnectionString("PostgresDatabase");
			optionsBuilder.UseNpgsql(connectionString);
		}
	}

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.Entity<Course>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("courses_pkey");

			entity.ToTable("courses");

			entity.Property(e => e.Id).HasColumnName("id");
			entity.Property(e => e.Description).HasColumnName("description");
			entity.Property(e => e.Name).HasColumnName("name");
			entity.Property(e => e.Prerequisite).HasColumnName("prerequisite");
			entity.Property(e => e.Subject).HasColumnName("subject");
		});

		OnModelCreatingPartial(modelBuilder);
	}

	partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}