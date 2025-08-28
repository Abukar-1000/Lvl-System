using System.Text.Json.Serialization;
using Supabase.Postgrest.Attributes;

namespace backend.Database.Function.Models
{
    public class Objective
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("daily")]
        public bool Daily { get; set; }

        [JsonPropertyName("completed")]
        public int Completed { get; set; }

        [JsonPropertyName("total")]
        public int Total { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime Created { get; set; }

        [JsonPropertyName("end")]
        public DateTime End { get; set; }
    }
}