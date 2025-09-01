

// JournalPage
namespace backend.Environment.Journal.Frontend.Models
{
    public class JournalPage
    {
        public string JournalName { get; set; }
        public string Data { get; set; }
        public string Img { get; set; }
        public long Page { get; set; }
        public DateTime Created { get; set; }
    }
    public class PageRow
    {
        public string Data { get; set; } = String.Empty;
    }

    public class ListRow
    {
        public string Data { get; set; } = String.Empty;
        public List<string> SubData = new();
        
    }
}