using backend.Database.Function.Models;
using backend.Database.Table.Models;
using backend.Environment.Journal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class JournalController : Controller
{
    protected readonly Supabase.Client supabase;
    public JournalController(Supabase.Client client)
    {
        this.supabase = client;
    }

    [HttpPost("Page/range")]
    public async Task<List<JournalPage>> GetPageRange(string journal, long start, long stop)
    {
        Console.WriteLine($"{journal}, {start}, {stop}");
        var skillsQuery = await supabase.Rpc(
            "get_journal_page_range",
            new Dictionary<string, object>
            {
                { "journal", journal },
                { "start", start },
                { "stop", stop }
            }
        );

        var response = JsonSerializer.Deserialize<List<JournalPage>>(skillsQuery.Content ?? "[]");
        return response;
    }

    [HttpPost("Upload/Page")]
    public async void UploadPage(UploadPage page)
    { 
        /*
            - Upload image to dropbox first.
            - Generate public access string to image.
            - Upload journal page to Supabase.
            - return Status 200 
        */
    }
}