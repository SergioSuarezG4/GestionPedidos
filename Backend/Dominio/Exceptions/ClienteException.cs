using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Exceptions
{
    public sealed class ClienteException:Exception
    {
        public ClienteException(string? message) : base(message)
        {
        }

    }
}
