using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace WebApi.Helpers
{
    public class PostgressDataContext : DataContext
    {
        public PostgressDataContext(IConfiguration configuration) : base(configuration) { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to postgress database
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }
    }
}
