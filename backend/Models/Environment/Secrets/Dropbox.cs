

namespace backend.Environment.Component.Models
{
    public class Dropbox
    {
        public string Key { get; set; } = String.Empty;
        public string Secret { get; set; } = String.Empty;
        public string Token { get; set; } = String.Empty;

        public Dropbox() { }
        public Dropbox(string Key)
        {
            this.Key = Key;
        }
    }
}