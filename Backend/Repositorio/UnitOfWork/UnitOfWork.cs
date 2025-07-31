using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore;
using Repositorio.GenericRepository.Interfaces;
using Repositorio.GenericRepository;
using Repositorio.UnitOfWork.Interfaces;
using System.Diagnostics.CodeAnalysis;

namespace Repositorio.UnitOfWork
{
    public class UnitOfWork<TContext> : IUnitOfWork<TContext>
        where TContext : DbContext
    {

        private readonly TContext _context;
        private Dictionary<Type, object> _repositories;
        private IDbContextTransaction _transaction;


        public UnitOfWork(TContext databaseContext)
        {
            _context = databaseContext;
            _repositories = new Dictionary<Type, object>();
        }

        public async Task<IDbContextTransaction> BeginTransaction()
        {
            return await _context.Database.BeginTransactionAsync();
        }

        public async Task BeginOwnTransactionAsync()
        {
            _transaction = await _context.Database.BeginTransactionAsync();
        }

        public async Task CommitOwnTransaction()
        {
            await _transaction.CommitAsync();
        }

        public async Task RollbackOwnTransaction()
        {
            await _transaction.RollbackAsync();
            await _transaction.DisposeAsync();
        }

        public async Task CommitTransaction(IDbContextTransaction transaction)
        {
            await transaction.CommitAsync();
        }

        public async Task RollbackTransaction(IDbContextTransaction transaction)
        {
            await transaction.RollbackAsync();
        }

        public async Task<T> CompleteReturnsEntityAsync<T>(T entity)
        {
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }
        public int Complete()
        {
            return _context.SaveChanges();
        }

        public IGenericRepository<TEntity> GetRepository<TEntity>()
            where TEntity : class
        {
            if (_repositories.ContainsKey(typeof(TEntity)))
            {
                return (IGenericRepository<TEntity>)_repositories[typeof(TEntity)];
            }

            var repository = new GenericRepository<TEntity>(_context);
            _repositories.Add(typeof(TEntity), repository);
            return repository;
        }

        [ExcludeFromCodeCoverage]
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        [ExcludeFromCodeCoverage]
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
        }

    }
}
