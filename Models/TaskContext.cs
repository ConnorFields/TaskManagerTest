using Microsoft.EntityFrameworkCore;


//Using Dependency Injection to inject DB context into Controller
namespace TaskManagerTest.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options): base(options){ }

        public DbSet<Task> TaskItems { get; set; }

    }
}
