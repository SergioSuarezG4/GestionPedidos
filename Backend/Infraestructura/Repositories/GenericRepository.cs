using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using Repositorio.GenericRepository.Interfaces;
using System.Linq.Expressions;
namespace Infraestructura.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity>
    where TEntity : class
    {
        protected readonly DbContext _context;
        private readonly DbSet<TEntity> _dbSet;

        public GenericRepository(DbContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        public async Task<TEntity?> GetAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await _dbSet.FirstOrDefaultAsync(expression).ConfigureAwait(false);
        }

        public async Task<IEnumerable<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await _dbSet.Where(expression).ToListAsync().ConfigureAwait(false);

        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _dbSet.ToListAsync().ConfigureAwait(false);
        }

        public TEntity? Get(Expression<Func<TEntity, bool>> expression)
        {
            return _dbSet.FirstOrDefault(expression);
        }

        public IEnumerable<TEntity> GetList(Expression<Func<TEntity, bool>> expression)
        {
            return _dbSet.Where(expression).ToList();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }

        public async Task<IEnumerable<TEntity>> GetByIdAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await _dbSet.Where(expression).ToListAsync().ConfigureAwait(false);
        }

        public async Task AddAsync(TEntity entity)
        {
            await _dbSet.AddAsync(entity).ConfigureAwait(false);
        }

        public void Add(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public void Delete(TEntity entity)
        {
            _dbSet.Remove(entity);
        }

        public void DeleteRange(IEnumerable<TEntity> entity)
        {
            _dbSet.RemoveRange(entity);
        }

        public void Update(TEntity entity)
        {
            _dbSet.Update(entity);
        }

        [ExcludeFromCodeCoverage]
        public IEnumerable<T> ExecuteSp<T>(string sql, params object[] parameters)
        {
            return _context.Database.SqlQueryRaw<T>(sql, parameters);
        }

        [ExcludeFromCodeCoverage]
        public async Task<IEnumerable<T>> ExecuteSpAsync<T>(string sql, params object[] parameters)
        {
            return await _context.Database.SqlQueryRaw<T>(sql, parameters)
                .ToListAsync()
                .ConfigureAwait(false);
        }

        public async Task<bool> AnyAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await _dbSet.AnyAsync(expression).ConfigureAwait(false);
        }

        public async Task<int> CountAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await _dbSet.CountAsync(expression).ConfigureAwait(false);
        }

        public bool Any(Expression<Func<TEntity, bool>> expression)
        {
            return _dbSet.Any(expression);
        }

        public int Count(Expression<Func<TEntity, bool>> expression)
        {
            return _dbSet.Count(expression);
        }

        public IQueryable<TEntity> Queryable()
        {
            return _dbSet.AsQueryable();
        }
    }
}
