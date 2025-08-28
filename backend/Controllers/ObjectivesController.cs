

using backend.Database.Function.Models;
using backend.Database.Table.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class ObjectivesController : Controller
{
    protected readonly Supabase.Client supabase;
    public ObjectivesController(Supabase.Client client)
    {
        this.supabase = client;
    }

    [HttpGet]
    public async Task<List<Objective>> GetObjectives()
    {
        var skillsQuery = await supabase.Rpc("get_all_objectives", null);
        var response = JsonSerializer.Deserialize<List<Objective>>(skillsQuery.Content ?? "[]");
        return response;
    }
}