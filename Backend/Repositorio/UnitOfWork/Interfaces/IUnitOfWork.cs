using Microsoft.EntityFrameworkCore.Storage;
using Repositorio.GenericRepository.Interfaces;

namespace Repositorio.UnitOfWork.Interfaces
{
    public interface IUnitOfWork<TContext> : IDisposable
    {
        Task<int> CompleteAsync();
        Task<T> CompleteReturnsEntityAsync<T>(T entity);
        int Complete();
        Task<IDbContextTransaction> BeginTransaction();
        Task CommitTransaction(IDbContextTransaction transaction);
        Task RollbackTransaction(IDbContextTransaction transaction);
        IGenericRepository<TEntity> GetRepository<TEntity>()
            where TEntity : class;
        Task BeginOwnTransactionAsync();
        Task CommitOwnTransaction();
        Task RollbackOwnTransaction();


    }
}
