using Business.Interfaces;
using Dominio.Entidad;
using Repositorio.GenericRepository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Exceptions;
using Repositorio.UnitOfWork.Interfaces;
using Repositorio.Modelo;

namespace Business
{
    public class ClienteBusiness:IClienteBusiness
    {
        private readonly IGenericRepository<Cliente> _genericRepositoryCliente;
        private readonly IUnitOfWork<Context> _unitOfWork;
        public ClienteBusiness(IUnitOfWork<Context> unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _genericRepositoryCliente = _unitOfWork.GetRepository<Cliente>();
        }

        private async Task AddClient(Cliente cliente) => await _genericRepositoryCliente.AddAsync(cliente);

        private async Task<IEnumerable<Cliente>> GetClients() => await _genericRepositoryCliente.GetAllAsync();

        public async Task<Cliente> CreateCliente(Cliente cliente)
        {
            if ( cliente == null)
            {
                throw new ClienteException("Producto Nulo");
            }
            await AddClient(cliente);

            var saveResult = await _unitOfWork.CompleteAsync();

            if ( saveResult <= 0){
                throw new ClienteException("No se pudo guardar el cliente correctamente");
            }

            return cliente;
        }

        public async Task<IEnumerable<Cliente>> GetAllClietnsAsync()
        {
            var clients = await GetClients();

            if( clients == null)
            {
                throw new ClienteException("No se encontraron Clientes");
            }

            return clients;
        }
    }
}
