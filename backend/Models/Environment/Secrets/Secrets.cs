
namespace backend.Environment.Component.Models
{
    public class Secrets
    {
        public Supabase supabase { get; set; } = new Supabase();

        public Secrets() { }
    }
}