

using backend.Database.Table.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class SkillsController : Controller
{
    protected readonly Supabase.Client supabase;
    public SkillsController(Supabase.Client client)
    {
        this.supabase = client;
    }

    [HttpGet]
    public async Task<List<SkillCategory>> GetSkills(int? limit = 100)
    {
        var query = await supabase.From<SkillCategory>().Get();
        return query.Models;
    }
}