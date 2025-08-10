using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace backend.Database.Table.Models
{     
    [Table("skill_category")]
    public class SkillCategory : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; } = String.Empty; 
    }
}