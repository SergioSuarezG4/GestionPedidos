using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;
using Business.Interfaces;
using Dominio.Entidad;

namespace Infraestructure.Validation
{
    public class ClienteValidation: AbstractValidator<Cliente>
    {
        private readonly IClienteBusiness _clienteBusiness;

        public ClienteValidation(IClienteBusiness clienteBusiness)
        {
            _clienteBusiness = clienteBusiness;

            RuleFor(x => x.nombre)
                .NotEmpty()
                .WithMessage("El nombre del cliente no puede ir vacio.");


            RuleFor(x => x.email)
                .NotEmpty().WithMessage("Ingrese correctamente el email")
                .EmailAddress().WithMessage("El email no es formato valido");


            RuleFor(x => x.telefono)
                .NotEmpty().WithMessage("El telefono del cliente no puede ir vacio!")
                .Matches(@"^\d+$").WithMessage("El teléfono solo debe contener números.");

        }

    }
}
