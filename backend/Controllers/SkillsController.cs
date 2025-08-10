

using backend.Database.Function.Models;
using backend.Database.Table.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text.Json;

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
    public async Task<List<SkillOption>> GetSkills()
    {
        var skillsQuery = await supabase.Rpc("get_all_skills", null);
        var response = JsonSerializer.Deserialize<List<SkillOption>>(skillsQuery.Content ?? "[]");
        return response;
    }
}