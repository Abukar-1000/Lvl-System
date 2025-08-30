
namespace backend.Environment.Component.Models
{
    public class Secrets
    {
        public Supabase supabase { get; set; } = new Supabase();
        public Dropbox dropbox { get; set; } = new Dropbox();

        public Secrets() { }
    }
}