using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Dominio.Entidad;

namespace Infraestructura.Modelo;

public class Context:DbContext
{
    public DbSet<Cliente> Cliente { get; set; }

    public Context(DbContextOptions<Context> options): base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.ToTable("cliente");
            entity.HasKey(x => x.id);
        });
    }
}
