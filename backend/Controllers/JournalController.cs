using backend.Database.Function.Models;
using backend.Database.Table.Models;
using backend.Environment.Journal.Models;
using backend.Environment.Response.Models;
using Dropbox.Api;
using Dropbox.Api.Files;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class JournalController : Controller
{
    protected readonly Supabase.Client supabase;
    protected readonly DropboxClient dropbox;
    public JournalController(
        Supabase.Client client,
        DropboxClient _dropbox
    )
    {
        this.supabase = client;
        this.dropbox = _dropbox;
    }

    [HttpPost("Page/range")]
    public async Task<List<JournalPage>> GetPageRange(string journal, long start, long stop)
    {
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
    public async Task<Generic> UploadPage(UploadPage page)
    {
        var fileName = page.ImgName;
        if (fileName is null)
        {
            fileName = DateTime.Now.ToString("MM_dd_yyyy") + ".jpeg";
        }

        var iamgeUploadResponse = await Upload(
            "Journal/Imgs",
            fileName,
            page.Img
        );

        if (iamgeUploadResponse.Status is not HttpStatusCode.OK)
        {
            return iamgeUploadResponse;
        }

        var imageUrl = await GetContentShareLink("/Journal/Imgs/" + fileName);
        imageUrl = GetPublicShareLink(imageUrl);

        var pageUpload = await supabase.Rpc(
            "post_journal_page",
            new Dictionary<string, object>
            {
                { "journal", page.Journal },
                { "data", page.Data },
                { "image", imageUrl },
                { "page", page.Number }
            }
        );

        var response = new Generic();
        response.Status = HttpStatusCode.OK;

        if (pageUpload.ResponseMessage.IsSuccessStatusCode is false)
        {
            response.Status = pageUpload.ResponseMessage.StatusCode;
            response.Error = pageUpload.ResponseMessage.Content.ToString();
        }

        return response;
    }

    private string GetPublicShareLink(string link)
    {
        return link.Substring(0, link.Length - 4) + "raw=1";
    }

    private async Task<string> GetContentShareLink(string path)
    {
        var list = await dropbox.Sharing.ListSharedLinksAsync(path, directOnly: true);
        if (list.Links.Count > 0)
        {
            return list.Links[0].Url;
        }

        var link = await dropbox.Sharing.CreateSharedLinkWithSettingsAsync(path);
        return link.Url;
    }
    private async Task<Generic> Upload(string folder, string file, string content)
    {
        var response = new Generic();
        try
        {

            var contentBytes = Convert.FromBase64String(content);
            using (var mem = new MemoryStream(contentBytes))
            {
                var request = await dropbox.Files.UploadAsync(
                    "/" + folder + "/" + file,
                    WriteMode.Overwrite.Instance,
                    body: mem
                );
            }

            response.Status = HttpStatusCode.OK;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            response.Status = HttpStatusCode.Conflict;
            response.Error = ex.Message;
        }

        return response;
    } 
}