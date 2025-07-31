using Dominio.Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IClienteBusiness
    {
       Task<Cliente> CreateCliente(Cliente cliente);
       Task<IEnumerable<Cliente>> GetAllClietnsAsync();
    }
}
