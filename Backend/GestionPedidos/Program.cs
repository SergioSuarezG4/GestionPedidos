using Infraestructure.Validation;
using Microsoft.EntityFrameworkCore;
using GestionPedidos.Middleware;
using Repositorio.UnitOfWork;
using Repositorio.GenericRepository;
using Repositorio.Modelo;
using Repositorio.GenericRepository.Interfaces;
using Repositorio.UnitOfWork.Interfaces;
using Business.Interfaces;
using Business;

using FluentValidation;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("PostgresConnection");

builder.Services.AddDbContext<Context>(options =>
{
    options.UseNpgsql(connectionString);

});

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

builder.Services.AddTransient<IClienteBusiness, ClienteBusiness>();
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

builder.Services.AddScoped(typeof(IUnitOfWork<>), typeof(UnitOfWork<>));

builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining(typeof(ClienteValidation));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
