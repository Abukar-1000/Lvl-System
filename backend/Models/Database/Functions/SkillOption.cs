using System.Text.Json.Serialization;
using Supabase.Postgrest.Attributes;

namespace backend.Database.Function.Models
{
    public class SkillOption
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("category")]
        public string Category { get; set; }

        [JsonPropertyName("level")]
        public long Level { get; set; }

        [JsonPropertyName("completed_objectives")]
        public long Completed_Objectives { get; set; }

        [JsonPropertyName("total_objectives")]
        public long Total_Objectives { get; set; }

        [JsonPropertyName("start_date")]
        public DateTimeOffset Start_Date { get; set; }

        [JsonPropertyName("longest_streak")]
        public long Longest_Streak { get; set; }
    }
}