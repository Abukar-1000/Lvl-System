using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace backend.Database.Table.Models
{     
    [Table("journals")]
    public class Journal : BaseModel
    {
        [PrimaryKey("id")]
        public long Id { get; set; }

        [Column("name")]
        public string Name { get; set; } = String.Empty;

        [Column("created_at")]
        public DateTime Created_At { get; set; } 
    }
}