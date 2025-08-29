using System.Text.Json.Serialization;
using Supabase.Postgrest.Attributes;

namespace backend.Database.Function.Models
{
    public class JournalPage
    {
        [JsonPropertyName("journal_name")]
        public string JournalName { get; set; }

        [JsonPropertyName("data")]
        public string Data { get; set; }

        [JsonPropertyName("img")]
        public string Img { get; set; }

        [JsonPropertyName("page")]
        public long Page { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime Created { get; set; }
    }
}