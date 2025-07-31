using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio.GenericRepository.Interfaces
{
    public interface IGenericRepository<TEntity>
       where TEntity : class
    {
        Task<TEntity?> GetAsync(Expression<Func<TEntity, bool>> expression);
        Task<IEnumerable<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> expression);
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<IEnumerable<TEntity>> GetByIdAsync(Expression<Func<TEntity, bool>> expression);
        TEntity? Get(Expression<Func<TEntity, bool>> expression);
        IEnumerable<TEntity> GetList(Expression<Func<TEntity, bool>> expression);
        IEnumerable<TEntity> GetAll();
        Task AddAsync(TEntity entity);
        void Add(TEntity entity);
        void Delete(TEntity entity);
        void DeleteRange(IEnumerable<TEntity> entity);
        void Update(TEntity entity);
        IEnumerable<T> ExecuteSp<T>(string sql, params object[] parameters);
        Task<IEnumerable<T>> ExecuteSpAsync<T>(string sql, params object[] parameters);
        Task<bool> AnyAsync(Expression<Func<TEntity, bool>> expression);
        Task<int> CountAsync(Expression<Func<TEntity, bool>> expression);
        bool Any(Expression<Func<TEntity, bool>> expression);
        int Count(Expression<Func<TEntity, bool>> expression);
        IQueryable<TEntity> Queryable();


    }
}
