using Microsoft.EntityFrameworkCore;
using TTVersta.Server.Models;

namespace VerstaTT.server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
    }
}
