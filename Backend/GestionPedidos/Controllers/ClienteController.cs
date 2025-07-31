using Microsoft.AspNetCore.Mvc;
using Dominio.Entidad;
using Dominio.Exceptions;
using Business.Interfaces;

namespace GestionPedidos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : Controller
    {
        private readonly IClienteBusiness _clienteBusiness;
        public ClienteController(IClienteBusiness clienteBusiness)
        {
            _clienteBusiness = clienteBusiness;
            
        }

        [HttpPost]
        public async Task <IActionResult> CreateClient(Cliente cliente)
        {
            var result = await _clienteBusiness.CreateCliente(cliente);
            return Ok(result);
            
        }
    }
}
