using System.ComponentModel.DataAnnotations;

namespace Dominio.Entidad
{
    public class Cliente
    {
        [Key]
        public int id { get; set; }

        public string nombre { get; set; }

        public string email { get; set; }

        public string telefono { get; set; }

    }
}
