

namespace backend.Environment.Component.Models
{
    public class Supabase
    {
        public string URL { get; set; } = String.Empty;
        public string Key { get; set; } = String.Empty;

        public Supabase() { }
        public Supabase(string URL, string Key)
        {
            this.URL = URL;
            this.Key = Key;
        }
    }
}