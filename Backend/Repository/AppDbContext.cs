using LearningManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace LearningManagement.Repository
{
    public class AppDbContext  : DbContext
    {
        public AppDbContext( DbContextOptions<AppDbContext> options): base(options)
        {
        }
            public DbSet<Student> Students { get; set; }
    }
}