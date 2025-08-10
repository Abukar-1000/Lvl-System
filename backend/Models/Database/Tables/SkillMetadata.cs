using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace backend.Database.Table.Models
{
    [Table("skill_metadata")]
    public class SkillMetadata : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }

        [Column("skill_id")]
        public int Skill_Id { get; set; }

        [Column("level")]
        public int Level { get; set; }

        [Column("completed_objectives")]
        public int Completed_Objectives { get; set; }

        [Column("total_objectives")]
        public int Total_Objectives { get; set; }

        [Column("start_date")]
        public DateTime Start_Date { get; set; }

        [Column("longest_streak")]
        public int Longest_Streak { get; set; }
    }
}