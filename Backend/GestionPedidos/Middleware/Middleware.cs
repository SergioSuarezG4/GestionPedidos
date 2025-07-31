using Dominio.ResultMessage;
using Microsoft.AspNetCore.Diagnostics;

namespace GestionPedidos.Middleware
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public GlobalExceptionHandler()
        {
        }
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext,
           Exception exception,
           CancellationToken cancellationToken)
        {
            var resultException = new Error
            {
                Code = 0,
                Message = exception.Message
            };
            httpContext.Response.StatusCode = resultException.Code;
            await httpContext.Response.WriteAsJsonAsync(resultException, cancellationToken);

            return true;
        }

    }
}
